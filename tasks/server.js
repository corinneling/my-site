const express = require('express')
const http = require('http')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 4000;

app.use('/', express.static('dist', {
  extensions: ['html', 'htm']
}));

app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});