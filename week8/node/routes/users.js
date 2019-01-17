'use strict';
var express = require('express');
var Users = require('../models/users');
var router = express.Router();
router.route('/')
  .get(function(req, res) {
    Users
      .fetchAll()
      .then(function(users) {
        res.json({users});
      });
    });
      router.route('/:Name/:password')
  .get(function(req, res) {
    Users
      .where({
        Name: req.params.Name,
        password: req.params.password
        })
      .fetchAll()
      .then(function(users) {
        res.json({users});
      });
  });
  module.exports = router;