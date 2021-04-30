var express = require('express')
var http = require('http')
var path = require('path')

var app = express()
  
const PORT = process.env.PORT || 4000;
 
app.use('/', express.static('dist', {
  extensions: ['html', 'htm']
}));

app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});