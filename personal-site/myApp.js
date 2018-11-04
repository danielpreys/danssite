var express = require('express');
var app = express();



app.get('/', function(req, res) {
res.sendFile(__dirname +  '/views/index.html');
});


app.use("/", express.static(__dirname + "/public"));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


