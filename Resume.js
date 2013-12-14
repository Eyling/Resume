var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('<a href="/fofia">hello world</a>');
});

app.get('/fofia', function(req, res){
	res.send('<a href="/">fofia</a>');
});
app.listen(3000);


