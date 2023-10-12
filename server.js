var express = require('express');
const path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist/"));
app.route('/*').get(function(req, res) { 
    return res.sendFile(path.join(__dirname, 'dist/index.html')); 
});
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);