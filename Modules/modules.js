// What is a Module in Node.js?
// Consider modules to be the same as JavaScript libraries.
// A set of functions you want to include in your application.

// Built-in Modules Reference
// https://www.w3schools.com/nodejs/ref_modules.asp

// Include Modules
// To include a module, use the require() function with the name of the module:

// Include Your Own Module
// Now you can include and use the module in any of your Node.js files.

var http = require('http'); 
var dt = require('../myfirstmodule');

// Now your application has access to the HTTP module, and is able to create a server:
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end('Hello World!');
}).listen(8080); 
