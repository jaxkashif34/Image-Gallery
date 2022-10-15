const dotenv = require('dotenv');
dotenv.config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'di2zelkg2',
  api_key: process.env.CLOUDINARY_API_KEY || 319113269968527,
  api_secret: process.env.CLOUDINARY_API_SECRET || 'NTDs6BPvIg-QFV08WB2tZ_YIcfA',
});
module.exports = { cloudinary };
