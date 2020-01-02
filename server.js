const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const fs = require('fs');
const http = require('http');
const logger = require('morgan');
const path = require('path');
const port = process.env.PORT || 5000;
const Tesseract = require('tesseract.js');
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

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app/build')));

app.get('/getS3Url', (req, res, next) => {
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
});

app.post('/images', (req, res, next) => {
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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(port, function() {
  console.log(new Date().toISOString() + ': server started securely on ' + port);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

module.exports = app;
