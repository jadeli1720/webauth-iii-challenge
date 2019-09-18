
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
      //PK
      users.increments();

      //username>string>unique>required
      users
        .string('username', 128)
        .notNullable()
        .unique();

      //password>string>required
      users
        .string('password', 128)
        .notNullable();
    
      //department>string>used to group users
      users
        .string('department', 128)
        .unique()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
