var handle = {};
var fs = require("fs");

handle['/'] = function index(response) {
  console.log("Request handler 'index' was called.");
  function res(err, data){
    if(!err){
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(data);
      response.end();
    }
  }
  fs.readFile('public/index.html', res);
}

handle['/start'] = function start(response) {
  console.log("Request handler 'start' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("This is Start page");
  response.end();
}
  
handle['/upload'] = function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("This is Upload page");
  response.end();
}
  
exports.handle = handle;
  