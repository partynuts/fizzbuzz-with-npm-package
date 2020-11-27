const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const fizzbuzzcontroller = require('./controllers/fizzbuzz-controller');

module.exports = (() => {
    app.use(bodyparser.json());

    app.use(fizzbuzzcontroller);
    return app;
  }
);
