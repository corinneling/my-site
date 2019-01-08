const colors = require('colors');
const express = require('express');
const open = require('opener');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', express.static('dist', {
  extensions: ['html', 'htm']
}));

app.listen(PORT, () => {
  console.log(`\n${colors.bgGreen(' - Server started - ').black}\n\nListening on localhost:${colors.green(PORT)}\n`);
});

open('http://localhost:3000/');