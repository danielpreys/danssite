var express = require('express');
var app = express();


var mongoose = require("mongoose");
mongoose.connect("mongodb://dpreys:daphil88@ds143683.mlab.com:43683/personaldb");

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var contactSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	phoneNumber: Number,
	Message: String
});

var User = mongoose.model("User", contactSchema);



app.get('/', function(req, res) {
res.sendFile(__dirname +  '/views/index.html');
});


app.post("/addname", (req, res) => {
 var myData = new User(req.body);
 myData.save()
 .then(item => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
});






app.use("/", express.static(__dirname + "/public"));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


