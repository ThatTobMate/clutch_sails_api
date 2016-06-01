/**
 * ClanController
 *
 * @description :: Server-side logic for managing Clans
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	matches: function(req, res){
    clans.findOne({id: req.param('id')})
      .populateAll()
      .exec(function findOneCB(err, data){
        return res.ok(data);
    });
  }
};

