'use strict';
exports.up = function(knex) {
  return knex.schema
    .createTable('booking1', function(table) {
        table.increments('bookingId').primary();
        table.string('username');
        table.string('driverName');
        table.string('bookingDateFrom');
        table.string('bookingDateTo');
    });
};
exports.down = function(knex) {
  return knex.schema
    .dropTable('booking1');
};
