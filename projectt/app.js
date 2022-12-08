const path = require('path');
const express = require('express');

const app = express();

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname + '/project2/homepage.html'));
});

app.get('contact', function(req,res){
	res.sendFile(path.join(__dirname + '/project2/contact.html'));
});

app.use(express.static(__dirname + '/project2/'));
app.listen(3000);

console.log("Running at Port 3000");
