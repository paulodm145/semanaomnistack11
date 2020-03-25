
exports.up = function(knex) {

    return knex.schema.createTable('ongs', function (t) {
        t.string('id').primary();
        t.string('name');
        t.string('email', 100);
        t.text('whatsapp');
        t.text('city');
        t.text('uf');
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');

};
