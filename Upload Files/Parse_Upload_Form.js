// Step 2: Parse the Uploaded File
// Include the Formidable module to be able to parse the uploaded file once it reaches the server.
// When the file is uploaded and parsed, it gets placed on a temporary folder on your computer.

var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fiels, files) {
            res.write('File uploaded');
            res.end(); 
        }); 
    }   else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080); 