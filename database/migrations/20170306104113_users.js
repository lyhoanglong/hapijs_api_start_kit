
exports.up = knex => (
  knex.schema.createTable('users', (table) => {
    table.increments();
    table.timestamps();
    table.string('email');
    table.string('name');
    table.string('password');
  })
);

exports.down = knex => (
  knex.schema.dropTable('users')
);
