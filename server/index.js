var express = require('express')
var Path = require('path')
var axios = require('axios')
var url = require('url')
var $ = require('jquery');
var bodyParser = require('body-parser')


var routes = express.Router()

routes.use(bodyParser.json());

//endpoint to call and get list of 10 movies
routes.get('/gogo', function(req, res) {
   var url_parts = url.parse(req.url,true);
   var query = url_parts.query;
  //console.log(query);
  //console.log(query.search)
  //api call to get top 10 results
    axios.get('http://www.omdbapi.com/?s='+query.search)
      .then(function(resp){
        //console.log(resp.data);
        res.send(resp.data)
        
        return;
      }).catch(function(){
        console.log('api call failed')
      })
   
})
//endpoint to get information on the movie clicked on
routes.get('/imdb', function(req, res) {
   var url_parts = url.parse(req.url,true);
   var query = url_parts.query;
  //api call to get single movie info
    axios.get('http://www.omdbapi.com/?i='+query.imdb)
    //axios.get('http://google.com')
      .then(function(resp){
        //console.log(resp.data);
        res.send(resp.data)
        return;
      }).catch(function(){
        console.log('api call failed')
      })
   
})

//everything under this is from boilerplate i used
routes.get('/api/tags-example', function(req, res) {
  res.send(['node', 'express', 'browserify', 'mithril'])
})

//
// Static assets (html, etc.)
//
var assetFolder = Path.resolve(__dirname, '../client/public')
routes.use(express.static(assetFolder))


if (process.env.NODE_ENV !== 'test') {
  //
  // The Catch-all Route
  // This is for supporting browser history pushstate.
  // NOTE: Make sure this route is always LAST.
  //
  routes.get('/*', function(req, res){
    res.sendFile( assetFolder + '/index.html' )
  })

  //
  // We're in development or production mode;
  // create and run a real server.
  //
  var app = express()

  // Parse incoming request bodies as JSON
  app.use( require('body-parser').json() )

  // Mount our main router
  app.use('/', routes)

  // Start the server!
  var port = process.env.PORT || 4000
  app.listen(port)
  console.log("Listening on port", port)
}
else {
  // We're in test mode; make this file importable instead.
  module.exports = routes
}
