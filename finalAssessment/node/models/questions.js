'use strict';
var bookshelf = require('../bookshelf');
var questions = bookshelf.Model.extend({
  tableName: 'questions1',
});
module.exports = questions;
