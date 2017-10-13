
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
   return knex.raw('TRUNCATE scotch RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('scotch').insert([
        {name: 'balvenie', flavor: 'honey, vanilla, cinnamon', region: 'speyside', rating: 5, price: 10, url: 'https://img.thewhiskyexchange.com/270/balob.12yov1.jpg'},
        {name: 'bunnahabhain', flavor: 'smoke, vanilla, cherry', region: 'islay', rating: 5, price: 11, url: 'https://img.thewhiskyexchange.com/270/bunob.12yov3.jpg'},
        {name: 'coal ila', flavor: 'smoke, toffee, vanilla', region: 'islay', rating: 5, price: 10, url: 'https://img.thewhiskyexchange.com/270/cilob.12yov1.jpg'},
        {name: 'dalwhinnie', flavor: 'honey, pear, cinnamon', region: 'speyside', rating: 4, price: 15, url: 'https://img.thewhiskyexchange.com/270/dalob.15yov1.jpg'},
        {name: 'glenlivet', flavor: 'honeysuckle, toffee, lemon', region: 'speyside', rating: 4, price: 14, url: 'https://img.thewhiskyexchange.com/270/glvob.12yov1.jpg'},
        {name: 'lagavulin', flavor: 'smoke, orange, pineapple', region: 'islay', rating: 5, price: 12, url: 'https://img.thewhiskyexchange.com/270/lgvob.16yo.jpg'},
        {name: 'laphroaig', flavor: 'mango, lemon, seaweed', region: 'islay', rating: 5, price: 10, url: 'https://img.thewhiskyexchange.com/270/lrgob.10yov1.jpg'},
        {name: 'macallan', flavor: 'honey, oak, lemon', region: 'speyside', rating: 5, price: 15, url: 'https://img.thewhiskyexchange.com/270/macob.12yov26.jpg'},
        {name: 'oban', flavor: 'smoke, orange, figs', region: 'highland', rating: 5, price: 13, url: 'https://img.thewhiskyexchange.com/270/obnob.14yo.jpg'},
        {name: 'talisker', flavor: 'white pepper, malt, smoke', region: 'island', rating: 4, price: 10, url: 'https://img.thewhiskyexchange.com/270/talob.18yo.jpg'},
      ]);
    });
};
