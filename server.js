var express = require('express'),
fs      = require('fs'),
    login = require('./routes/login'),
    app = express();

app.configure(function () {
	app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
	app.use(express.bodyParser());
  app.use("/img", express.static(__dirname + '/src/img'));
});

app.get('/login/github', login.github);

app.get('/', function(req, response){
  response.send(fs.readFileSync('src/index.html').toString());
});
app.get('/done', function(req, response){
  response.send(fs.readFileSync('src/done.html').toString());
});
/*
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
*/
module.exports = app;
