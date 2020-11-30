const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fizzbuzzcontroller = require('./controllers/fizzbuzz-controller');

module.exports = (() => {
    app.use(bodyParser.json());

    app.use(fizzbuzzcontroller);
    return app;
  }
);
