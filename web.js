var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    fs.readFileSync('/index.html', function (err, data) {
	if (err) throw err;
	var newdata = new Buffer(data,"utf-8");
//	var newdata = new Buffer(1024);
//	console.log(data);
    });
    response.send(newdata.tostring('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});

