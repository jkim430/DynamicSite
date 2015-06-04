var router = require('./router.js');
//Problem: We need a single way to look at a user's badge count and JS points from a web browser
//Solution: Use Node.js to perform the profile look ups and serve our templates via HTTP

//Create a web server
var http = require('http');
http.createServer(function (req, res) {
  router.home(req, res);
  router.user(req, res);
}).listen(3000);
console.log('Server running at http://workspace-url/');