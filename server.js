'use strict';

const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const data = require(__dirname + '/src/assets/city.list.json');

app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/city/search', function (req, res) {
  const result = data.filter(city => city.name.toLowerCase().startsWith(req.query.q));
  res.json(result);
});

app.listen(4201, () => {
  console.log('Server running on port 4201..')
});
