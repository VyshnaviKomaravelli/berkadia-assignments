'use strict';
var bookshelf = require('../bookshelf');
var Drivers = bookshelf.Model.extend({
  tableName: 'drivers',
});
module.exports = Drivers;