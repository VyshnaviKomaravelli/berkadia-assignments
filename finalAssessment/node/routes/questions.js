'use strict';
var express = require('express');
var questions = require('../models/questions');
var router = express.Router();
router.route('/')
  .get(function(req, res) {
    questions
      .fetchAll()
      .then(function(questions) {
        res.json({ questions });
      });
  });
  router.route('/:id')
  .get(function(req, res) {
    questions
      .where({
       id: req.params.id,

        })
      .fetchAll()
      .then(function(questions) {
        res.json({questions});
      });
  });
module.exports = router;
