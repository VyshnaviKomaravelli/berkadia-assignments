'use strict';
var express = require('express');
var Booking = require('../models/booking');
var router = express.Router();
router.route('/')
  .get(function(req, res) {
    console.log(res.statusCode);
    Booking
      .fetchAll()
      .then(function(bookings) {
        res.json({ bookings });
      });
  }).post(function(req, res) {
    new Booking({
      username: req.body.user,
      drivername: req.body.drivername,
      bookingDateFrom: req.body.dateFrom,
      bookingDateTo: req.body.dateTo,
    })
      .save()
      .then(function(saved) {
        res.json({ saved });
      });
  });
  module.exports = router;
