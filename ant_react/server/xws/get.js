
var request = require('request');
var lib  =require('./service')

module.exports = function(app){
  app.get(['/SibuXwsApi/*'],function(req,res){
    var url = req.url
    url = url.replace(/\/SibuXwsApi\//g,'/')

    var options = lib.getOptions(url,'GET',req);
    function callback(error, response, body) {
      // console.log(response)
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        res.json(info)
      }
    }
    request(options, callback);
  })

  

}

