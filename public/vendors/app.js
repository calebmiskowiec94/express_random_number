var express = require('express');

var app = express();

var port = 5000;
app.get('/somethingAwesome', function(req, res) {
  res.send('Something awesome!');
});
app.get('/*', function(req, res) {
  // Send a resonse
  var file = req.params[0] ||  '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file)
)});

app.use(express.static('public'));

app.listen(port, function() {
	console.log('listening on port', port);
});