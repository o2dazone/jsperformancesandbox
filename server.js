/* eslint no-console: 0 */
'use strict';

const path = require('path');
const express = require('express');
const port = process.env.PORT || '9000';
const app = express();


// main page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/js.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'js.js'));
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) console.log(err);
  console.info('==> Server started on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
