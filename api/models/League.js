/**
* League.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,
  // identity: 'leagues',
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
    clans: {
      collection: 'clan',
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

