var express = require('express');

var app = express();

app.get('/', function(req, res) {
  return res.send(fs.readFileSync(path.resolve('..', 'index.html')));
});

var colors = ['red', 'blue', 'green', 'yellow', 'purple'];
app.get('/api/randomcolor', function (req, res) {
  res.send({
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  });
});

module.exports = app;
