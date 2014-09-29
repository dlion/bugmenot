var request = require('request'),
    cheerio = require('cheerio');

module.exports  = (function(request, cheerio) {

  var SITE  = "http://bugmenot.com/view/";

  return {
    getAccounts: function(domain, cb) {
      if(domain.length > 0) {
        //Remove http or https from the URL
        domain = domain.replace(/^https?:\/\//,'');

        request.get(SITE+domain, function(err, resp) {
          if(!err) {
            var $ = cheerio.load(resp.body),
                result = [];
            //Retrieve accounts
            $('.account').each(function() {
              var these = $(this);
              //Retrieve user and password
              var info = these.find('dd kbd');
              //Retrieve stats
              var stat = these.find('.stats li');
              //Put everything in the array
              result.push({
                username: info.get(0).children[0].data,
                password: info.get(1).children[0].data,
                stat: stat.get(0).children[0].data.substring(0, 3),
                vote: stat.get(1).children[0].data
              });
            });

            return cb(null, result);
          }
          return cb(err, null);
        });
      } else {
        return cb("Insert a valid domain", null);
      }
    }
  };
}(request, cheerio));
