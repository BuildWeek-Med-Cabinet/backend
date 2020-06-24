
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('marijuana')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('marijuana').insert([
        {strain: 'Mango Kush', effect: 'Giggly', flavor: 'Pine'},
        {strain: 'Blue Dream', effect: 'Happy', flavor: 'Herbal'},
        {strain: 'Purple Haze', effect: 'Euphoric', flavor: 'Berry'}
      ]);
    });
};
