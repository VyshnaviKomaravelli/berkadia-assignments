'use strict';
exports.up = function(knex) {
  return knex.schema
    .createTable('questions', function(table) {
      table.increments('id').primary();
      table.string('question');
      table.string('option1');
      table.string('option2');
      table.string('option3');
      table.string('option4');
      table.string('correctoption');
    });
};
exports.down = function(knex) {
  return knex.schema
    .dropTable('contactquestions');
};
