// The Formidable Module
// There is a very good module for working with file uploads, called "Formidable".
// The Formidable module can be downloaded and installed using NPM:

// Upload Files
// Now you are ready to make a web page in Node.js that lets the user upload files to your computer:

// Step 1: Create an Upload Form
// Create a Node.js file that writes an HTML form, with an upload field:
// This code will produce an HTML form:

var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type = "submit">');
    res.write('</form>');
    return res.end();
}).listen(8080);


