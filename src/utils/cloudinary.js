const cloudinary = require('cloudinary').v2;

const uploadUserImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        resource_type: 'image',
        folder: "Home/users"
    })
}


async function uploadImageFromFormData(formData) {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream((error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
  
      formData.pipe(stream);
    });
  }


module.exports = {
  uploadUserImage,
  uploadImageFromFormData,
  
};
