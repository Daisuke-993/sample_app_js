var handle = {};
var fs = require("fs");

handle['/'] = function index(response, postData) {
  console.log("Request handler 'index' was called.");
  function res(err, data){
    if(!err){
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(data);
      response.end();
    } else {
      console.log(err.message);
    }
  }
  fs.readFile('public/index.html', res);
}

handle['/post'] = function post(response, postData) {
  console.log("Request handler 'post' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(postData);
  response.end();
}
  
exports.handle = handle;
  