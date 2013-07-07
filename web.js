var express = require('express');
fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var data = fs.readFileSync('index.html')
    var newdata = new Buffer(data,"utf-8");
// 	if (err) throw err;
// 	var newdata = new Buffer(data,"utf-8");
// //	var newdata = new Buffer(1024);
// //	console.log(data);
//     });
    // response.send(newdata.tostring('utf-8'));
    response.send(newdata);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});

