
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('scotch', function(table){
      table.increments('id').primary();
      table.string('name').notNull();
      table.string('flavor').notNull();
      table.string('region').notNull();
      table.integer('rating');
      table.integer('price');
    })

};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('scotch');
};
