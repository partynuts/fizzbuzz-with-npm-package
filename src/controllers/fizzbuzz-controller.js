const { Router } = require('express');
const controller = Router();
const fizzbuzz = require('fizzbuzz-module-cli');

controller.get('/fizzbuzz/:num', async (req, res) => {
  if (req.params.num === Number(req.params.num).toString()) {

    if (req.params.num <= 0) {
      return res.status(400).send('Please insert a number bigger than 0!');
    }
    const result = fizzbuzz(Number(req.params.num));
    return res.json(result);
  }
  return res.status(400).send('Please insert a number!')
});

module.exports = controller;
