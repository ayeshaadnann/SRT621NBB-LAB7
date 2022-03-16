const port = 8989,
http = require("http"),
httpStatus = require("http-status-codes"),
app = http.createServer((request, response) => {
response.writeHead(httpStatus.OK,
{"Content-Type":"text/html"});
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
response.end(dateTime);
});
app.listen(port);
console.log(`The server has started and is listenign on port number: ${port}`);
