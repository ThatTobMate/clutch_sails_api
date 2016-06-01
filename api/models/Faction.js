/**
* Faction.js
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
      abbreviation: {
        type: 'string'
      },
      clans: {
        model: 'clan'
      },
      users: {
        collection: 'user',
        via: 'factions'
      },
      league: {
        model: 'league'
      },
      // clan_matches: {
      //   collection: 'faction',
      //   via: 'faction_a',
      //   through: 'clan_matches'
      // },
      // reverse_clan_matches: {
      //   collection: 'faction',
      //   via: 'faction_b',
      //   through: 'clan_matches'
      // },
      homeClanMatches: {
        collection: 'clan_matches',
        via: 'faction_a'
      },
      awayClanMatches: {
        collection: 'clan_matches',
        via: 'faction_b'
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

