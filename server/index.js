const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const DB = Object.values(require('./local.json').directors);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/directors', (req, res) => {
  res.json(DB);
});

app.get('/api/director/:id', (req, res) => {
  const result = DB[req.params.id];
  res.json(result);
});

app.post('/api/search', (req, res) => {
  const { query, lang } = req.body;

  const result = DB.filter(
    i =>
      i.name[lang].toLowerCase().includes(query.toLowerCase()) ||
      i.birthPlace[lang].toLowerCase().includes(query.toLowerCase())
  );

  res.json(result);
});

const port = 5000;
const server = app.listen(port, () => console.log(server.address()));
