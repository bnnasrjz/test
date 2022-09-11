//task 1
console.log("Hello, World!");
//task 2
var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200);
  response.write('<h1>Hello Node!!!!</h1>\n');
  response.end();
}).listen(3000);
console.log('Server running at http://localhost:3000');
//task 3
var fs = require("fs");
function readData(err, data) {
	  console.log(data);
}
fs.readFile('welcome.txt','utf8', readData);
