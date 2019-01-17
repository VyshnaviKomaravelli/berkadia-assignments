'use strict';
var express = require('express');
var Driver = require('../models/drivers');
var router = express.Router();
router.route('/')
  .get(function(req, res) {
    Driver
      .fetchAll()
      .then(function(driver) {
        res.json({driver });
      });
  });
  router.route('/:id')
  .get(function(req, res) {
    Driver
      .where({
       id: req.params.id,

        })
      .fetchAll()
      .then(function(driver) {
        res.json({driver});
      });
  });
  module.exports = router;