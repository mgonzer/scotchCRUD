const knex = require('./knex');

module.exports = {
  scotch: {
    getAll: function(){
      return knex('scotch');
    },
    getOne: function(id){
      return knex('scotch').where('id', id).first();
    },
    create: function(scotch){
      return knex('scotch').insert(scotch).returning('*');
    },
    update: function(id, scotch){
      return knex('scotch').where('id', id).update(scotch, '*');
    },
    delete: function(id){
      return knex('scotch').where('id', id).del();
    }
  }
}
