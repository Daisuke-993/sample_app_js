var http=require('http');
var server = http.createServer(function(req, res) {
   res.writeHead(200, {'ContentType': 'text/plain'});
   res.end('HelloWorld');
});
server.listen(80);
