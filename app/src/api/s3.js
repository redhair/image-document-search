import axios from 'axios';

const url = process.env.REACT_APP_BASE_URL;

const getS3Url = () => axios.get(url + 'getS3Url');

const uploadJpeg = (url, file) => 
  axios.put(url, file, { headers: { 'Content-Type': file.type } });

export function uploadImage(image) {
  const result = new Promise(function(resolve, reject) {
    getS3Url()
      .then(urlData => ({
        imageId: process.env.REACT_APP_S3_BUCKET + urlData.data.key,
        url: urlData.data.url
      }))
      .then(({ imageId, url }) => {
        uploadJpeg(url, image).then(res => {
          if (res.status === 200) {
            resolve(imageId);
          } else {
            reject('Image failed to upload');
          }
        });
      });
  });

  return result;
}
