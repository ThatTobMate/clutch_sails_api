/**
* ClanMatches.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  identity: 'clan_matches',
  attributes: {
      id: {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true
      },
      time: 'string',
      home_clan: {
          columnName: 'home_clan_id',
          type: 'integer',
          foreignKey: true,
          references: 'clans',
          on: 'id',
          onKey: 'id'
      },
      away_clan: {
          columnName: 'away_clan_id',
          type: 'integer',
          foreignKey: true,
          references: 'clans',
          on: 'id',
          onKey: 'id'
      }
  }
};

