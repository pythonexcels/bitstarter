
var express = require('express');
fs = require('fs');

var app = express.createServer(express.logger());

// app.get('/', function(request, response) {
//   response.send('Hello World 2!');
// });


app.get('/', function(request, response) {
    // var data = fs.readFileSync('index.html',"utf-8")
    // var newdata = new Buffer(data,"utf-8");
    // response.send(newdata);
    response.send(fs.readFileSync('index.html',"utf-8"));
});

app.get('/index.html', function(request, response) {
    // var data = fs.readFileSync('index.html',"utf-8")
    // var newdata = new Buffer(data,"utf-8");
    // response.send(newdata);
    response.send(fs.readFileSync('index.html',"utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});

