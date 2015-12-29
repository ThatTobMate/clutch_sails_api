/**
* Clan.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  identity: 'clans',
  attributes: {
    name: {
      type: 'string',
      unique: true
    },
    homeClanMatches: {
      collection: 'clans',
      through: 'clan_matches',
      via: 'home_clan'
    },
    awayClanMatches: {
      collection: 'clans',
      through: 'clan_matches',
      via: 'away_clan'
    } 
  }
};

