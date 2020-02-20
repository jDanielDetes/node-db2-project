
exports.up = function(knex) {
  return knex.schema.createTable("Cars",tbl =>{

    tbl.increments();

    //Required Information
    tbl.string("VIN",17).notNullable().index();
    tbl.string("make",256).notNullable().index();
    tbl.string("model",256).notNullable().index();
    tbl.integer("Miliage",7).notNullable().index();
    
    //Non required information


  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Cars")
};
