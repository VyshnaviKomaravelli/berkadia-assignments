'use strict';
exports.up = function(knex) {
  return knex.schema
    .createTable('users1', function(table) {
        table.increments('userId').primary();
        table.string('Name');
        table.string('password');
    });
};
exports.down = function(knex) {
  return knex.schema
    .dropTable('users1');
};