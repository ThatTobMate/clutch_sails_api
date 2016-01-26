/**
* Game.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,
  // identity: 'games',
  attributes: {
    title: {
      type: 'string'
    },
    gameCode: {
      type: 'string',
      columnName: 'game_code'
    },
    console: {
      model: 'console'
    },
    leagues: {
      collection: 'league',
      via: 'game'
    },
    createdAt: {
      type: 'datetime',
      columnName: 'created_at'
    },
    updatedAt: {
      type: 'datetime',
      columnName: 'updated_at'
    }
  }
};

