/**
* Console.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,
  identity: 'consoles',
  attributes: {
    name: {
      type: 'string',
      unique: true
    },
    games: {
      collection: 'games',
      via: 'console'
    }
  }
};

