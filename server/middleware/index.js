const multer = require('multer');
const path = require('path');
const allowedFiles = {
  jpeg: 'jpen',
  jpg: 'jpg',
  png: 'png',
  webp: 'webp',
};
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, `${path.join(path.dirname(__dirname), 'uploads')}`);
    },
    filename: (req, file, callback) => {
      callback(null, `${file.originalname}-${file.fieldname}-${Date.now()}-${file.mimetype.split('/')[1]}`);
    },
  }),
  fileFilter: (req, file, callback) => {
    const fileExt = file.mimetype.split('/')[1];

    if (!(fileExt in allowedFiles)) {
      callback(null, false);
    }
    callback(null, true);
  },
}).array('images', 10);

module.exports = { allowedFiles, upload };
