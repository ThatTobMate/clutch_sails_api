/**
* Clan.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,
  identity: 'clans',
  attributes: {
    name: {
      type: 'string',
      unique: true
    },
    users: {
      collection: 'users',
      via: 'clans'
    },
    league: {
      model: 'leagues'
    },
    homeClans: {
      collection: 'clans',
      through: 'clan_matches',
      via: 'home_clan'
    },
    awayClans: {
      collection: 'clans',
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
    }
  }
};

