
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('Cars').insert([
        {id: 1, VIN: '1a3vb3n3hn3j', make:"Tesla", model:"S", miliage:200,Title:"clean"},
        {id: 2, VIN: '12n3j1n3kj1', make:"Honda", model:"spu", miliage:20293,Title:"destroyed"},
        {id: 3, VIN: '1313hn13u', make:"Audi", model:"S6", miliage:500,Title:"clean"}
      ]);
    });
};


