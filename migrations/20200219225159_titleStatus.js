
exports.up = function(knex) {
  return knex.schema.table("Cars",tbl =>{
      tbl.string("Title",128)
  })
};

exports.down = function(knex) {
  return knex.schema.table("cars",tbl =>{
      tbl.dropColumn("Title")
  })
};
