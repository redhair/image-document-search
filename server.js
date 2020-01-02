const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const fs = require('fs');
const https = require('https');
const logger = require('morgan');
const path = require('path');
const port = 3001;
const sslport = 3443;
const routes = require('./routes/index');
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(logger('dev'));
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);

var privateKey = fs.readFileSync('ssl/server-key.pem');
var certificate = fs.readFileSync('ssl/server-cert.pem');

https
  .createServer(
    {
      key: privateKey,
      cert: certificate
    },
    app
  )
  .listen(sslport, function() {
    console.log(new Date().toISOString() + ': server started securely on ' + sslport);
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
