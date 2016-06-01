/**
 * NewsController
 *
 * @description :: Server-side logic for managing News
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getNews: function(req, res){
    sails.request('http://feeds.thescoreesports.com/cod.rss', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var articles = []
            var $ = sails.cheerio.load(body);
            for(var i = 0; i < $('item').length; i++){
              var title, link, content;
              var json = { title : "", link : "", content : "", body: $('item')};
              json.title = $('item')[i].children[3].children[i].data;
              json.link = $('item')[i].children[6].data;
              json.content = $('item')[i].children[9].children[3].children[1].data
              articles.push(json)
            }
            

            return res.send(articles);

         }
    })

  }
	
};

