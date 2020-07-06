var handle = {};
var fs = require("fs");
var request = require("request");

var weather = function(city){


}

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
  var data = JSON.parse(postData);
  var base = "https://api.openweathermap.org/data/2.5/weather?";
  var query = "q=" + data.city + "&units=metric&appid=e753db02de38e5d06f1fdb54a251f5d1";
  request.get(base + query, function(err, res, body) {
    if (err) {
      console.log('Error: ' + err.message);
      return;
    }
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(body));
  });

}
  
exports.handle = handle;
  