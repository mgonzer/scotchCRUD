
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
   return knex.raw('TRUNCATE scotch RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('scotch').insert([
        {name: 'balvenie', flavor: 'honey, vanilla, cinnamon', region: 'speyside', rating: 5, price: 10},
        {name: 'bunnahabhain', flavor: 'smoke, vanilla, cherry', region: 'islay', rating: 5, price: 11},
        {name: 'coal ila', flavor: 'smoke, toffee, vanilla', region: 'islay', rating: 5, price: 10},
        {name: 'dalwhinnie', flavor: 'honey, pear, cinnamon', region: 'speyside', rating: 4, price: 15},
        {name: 'glenlivet', flavor: 'honeysuckle, toffee, lemon', region: 'speyside', rating: 4, price: 14},
        {name: 'lagavulin', flavor: 'smoke, orange, pineapple', region: 'islay', rating: 5, price: 12},
        {name: 'laphroaig', flavor: 'mango, lemon, seaweed', region: 'islay', rating: 5, price: 10},
        {name: 'macallan', flavor: 'honey, oak, lemon', region: 'speyside', rating: 5, price: 15},
        {name: 'oban', flavor: 'smoke, orange, figs', region: 'highland', rating: 5, price: 13},
        {name: 'talisker', flavor: 'white pepper, malt, smoke', region: 'island', rating: 4, price: 10},
      ]);
    });
};
