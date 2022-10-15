const express = require('express');
const dotenv = require('dotenv');
const { allowedFiles, upload } = require('./server/middleware');
const cors = require('cors');
const { cloudinary } = require('./server/config');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
dotenv.config();
const app = express();
app.use(cors());
const path = require('path');
app.use(express.static(path.join(__dirname, 'client/build')));

/* This is the code that is being executed when the user uploads a file. */
app.post('/upload', upload, async (req, res) => {
  const files = req.files;
  if (files?.length === 0) {
    res.send(`only ${Object.keys(allowedFiles).map((key) => ` ${key} : `)} are allowed`);
  }
  /* This is the options object that is being passed to the cloudinary.uploader.upload method. */
  const options = {
    unique_filename: false,
    overwrite: true,
  };
  try {
    /**
     * It uploads images to cloudinary and returns a promise that resolves to an array of images
     * @returns An array of images.
     */
    const uploadImages = () => {
      return new Promise((resolve, reject) => {
        const images = [];
        files.forEach((file) => {
          cloudinary.uploader.upload(file.path, { ...options, public_id: `image-gallery/${file.originalname}` }, (err, result) => {
            if (err) {
              reject(err);
            }
            images.push(result);
            if (images.length === files.length) {
              resolve(images);
            }
          });
        });
      });
    };

    /* Saving the images in the database. */
    uploadImages()
      .then((images) => {
        const saveInPostGres = () => {
          return new Promise((resolve, resject) => {
            const imageList = [];
            /* Saving the images in the database. */
            images.forEach(async (image) => {
              const img = {
                asset_id: image.asset_id,
                secure_url: image.secure_url,
                width: image.width,
                height: image.height,
                name: image.public_id,
                created_at: image.created_at,
                bytes: image.bytes,
              };

              /* Saving the image in the database. */
              prisma.image.create({ data: img }).then((result) => {
                imageList.push(result);
                if (imageList.length === images.length) {
                  resolve(imageList);
                }
              });
            });
          });
        };

        saveInPostGres().then((result) => {
          res.json({ message: 'Image uploaded successfully', data: result });
        });
      })
      .catch((e) => {
        console.log(e);
        res.send(e.message);
      });
  } catch (e) {
    console.log(e);
  }
});

/* This is the code that is being executed when the user make a request on /api path */
app.get('/api', async (req, res) => {
  const images = await prisma.image.findMany();
  res.json({ message: 'Images max 10', data: images });
});
/* Deleting the image from the database. */
app.delete('/delete-image/:id', async (req, res) => {
  const id = req.params.id;
  await prisma.image.delete({
    where: {
      id,
    },
  });
});

/* This is the code that is being executed when the user uploads a file. */
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is up on http://localhost:${PORT}`));
