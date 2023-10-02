var express = require('express');
const path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist/"));
app.route('/*').get(function(req, res) { 
    return res.sendFile(path.join(__dirname, 'dist/index.html')); 
});
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "https://notify-api.line.me/api/notify");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	next();
});
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);