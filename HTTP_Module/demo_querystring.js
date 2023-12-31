// Read the Query String
// The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).
// This object has a property called "url" which holds the part of the url that comes after the domain name:

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month; 
    res.end(); 
}).listen(8080); 