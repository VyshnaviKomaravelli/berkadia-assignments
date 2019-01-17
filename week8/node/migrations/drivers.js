'use strict';
exports.up = function(knex) {
  return knex.schema
    .createTable('drivers1', function(table) {
      table.increments('id').primary();
      table.string('Name');
      table.string('emailAddress');
      table.string('Experience');
      table.string('Image');
      table.string('Rating');
    });
};
exports.down = function(knex) {
  return knex.schema
    .dropTable('drivers1');
};