/**
* Game.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,
  identity: 'games',
  attributes: {
    name: {
      type: 'string',
      unique: true
    },
    gameCode: {
      type: 'string'
    },
    console: {
      model: 'consoles'
    },
    leagues: {
      collection: 'leagues',
      via: 'game'
    }
  }
};

