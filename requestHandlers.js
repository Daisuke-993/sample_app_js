var handle = {};

handle['/'] = function index(response) {
  console.log("Request handler 'index' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("This is Index page");
  response.end();
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
  