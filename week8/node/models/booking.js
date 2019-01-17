'use strict';
var bookshelf = require('../bookshelf');
var Booking = bookshelf.Model.extend({
  tableName: 'booking',
});
module.exports = Booking;
