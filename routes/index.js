const Tesseract = require('tesseract.js');
const express = require('express');
const router = express.Router();
const algoliasearch = require('algoliasearch');
const client = algoliasearch(process.env.ALGOLIA_KEY, process.env.ALGOLIA_SECRET);
const index = client.initIndex('image-document-search');
const uuid = require('uuid/v1');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_PUBLISHABLE_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: 'us-east-2',
  signatureVersion: 'v4'
});

router.get('/getS3Url', (req, res, next) => {
  let key;
  let bucket = 'image-document-search';

  const makeResponse = (type, key) => {
    s3.getSignedUrl(
      'putObject',
      {
        Bucket: bucket,
        ContentType: type,
        Key: key
      },
      (err, url) => res.send({ key, url })
    );
  }

  key = `${uuid()}.jpg`;
  return makeResponse('jpg', key);

  /*switch(req.params.uploadType) {
    case 'jpeg':
     
    case 'png':
      key = `${uuid()}.png`;
      return makeResponse('png', key);
    case 'jpg':
      key = `${uuid()}.jpg`;
      return makeResponse('jpg', key);
    case 'tif':
      key = `${uuid()}.tif`;
      return makeResponse('tif', key);
    case 'gif':
      key = `${uuid()}.gif`;
      return makeResponse('gif', key);
    default:
      return res.status(400).json({ message: 'Unsupported image type plese use images of type "jpeg", "jpg", "png"'});
  }
  */
});

router.post('/images', (req, res, next) => {
  Tesseract.recognize(
    req.body.image,
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    let image = {
      url: req.body.image,
      text: text
    }

    index.addObjects([image], (err, content) => {
      if (err) next(err);

      res.json({content})
    });
  }).catch(next)
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

module.exports = router;
