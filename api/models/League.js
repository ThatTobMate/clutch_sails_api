/**
* League.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,
  attributes: {
    name: {
      type: 'string',
      unique: true
    },
    type: {
      type: 'string'
    },
    game: {
      model: 'game'
    },
    factions: {
      collection: 'faction',
      via: 'league'
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

