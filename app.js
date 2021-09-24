// node app.js
// http://localhost:8888/?num=5

let http = require("http");
const url = require('url');

function conexio(request, response) {
  // console.log(request.url);
  const queryObject = url.parse(request.url,true).query;

  // console.log(queryObject);
  // console.log(queryObject.num);

  let num = queryObject.num

  let table = "<table border='2' style='border-color: black'>"

  for (i=0; i <= 10; i++) {
    var col_1 = num + ' * ' + i;
    var col_2 = num * i;
    table = table + '<tr><td>' + col_1 + '</td><td>' + col_2 + '</td></tr>'
  }

  table += '</table>'

  console.log(table);

  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  response.write(table);
  response.end();
}

http.createServer(conexio).listen(8888);