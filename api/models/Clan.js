/**
* Clan.js
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
    users: {
      collection: 'user',
      via: 'clans'
    },
    league: {
      model: 'league'
    },
    homeClans: {
      collection: 'clan',
      through: 'clan_matches',
      via: 'home_clan'
    },
    awayClans: {
      collection: 'clan',
      through: 'clan_matches',
      via: 'away_clan'
    } ,
    awayClanMatches: {
      collection: 'clan_matches',
      via: 'away_clan'
    },
    homeClanMatches: {
      collection: 'clan_matches',
      via: 'home_clan'
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

