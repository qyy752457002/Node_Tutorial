// Read the Query String
// The function passed into the http.createServer() has a req argument that represents the request from the client
// as an object (http.IncomingMessage object).

// This object has a property called "url" which holds the part of the url that comes after the domain name:
var http = require('http')
http.createServer(function(res, req) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
}).listen(8080);

// Save the code above in a file called "demo_http_url.js" and initiate the file:

