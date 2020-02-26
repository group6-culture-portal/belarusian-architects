const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const DB = Object.values(require('./local.json').directors).map((director, index) => {
  director.id = index;

  return director;
});

var whitelist = ['http://localhost:3000', 'undefined'];
var corsOptions = {
  origin: function(origin, callback) {
    // console.log(origin);
    // if (whitelist.indexOf(origin) !== -1) {
    callback(null, true);
    // } else {
    //   callback(new Error('Not allowed by CORS'));
    // }
  },
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/directors', (req, res) => {
  res.json(DB);
});

app.get('/api/director/:id', (req, res) => {
  const id = Number(req.params.id);
  const result = DB[id];

  const nextId = (id + 1) % DB.length;
  result.next = { id: nextId, name: DB[nextId].name };

  const prevId = (id + DB.length - 1) % DB.length;
  result.prev = { id: prevId, name: DB[prevId].name };

  res.json(result);
});

app.post('/api/search', (req, res) => {
  const { query } = req.body;
  const comparing = query.toLowerCase();

  const result = DB.filter(i => {
    const names = Object.values(i.name).join(' ');
    const cities = Object.values(i.birthPlace).join(' ');

    if (names.toLowerCase().includes(comparing) || cities.toLowerCase().includes(comparing))
      return true;
  });

  res.json(result);
});

app.get('/api/director_of_day', (req, res) => {
  const result = DB[new Date().getDate() % DB.length];

  res.json(result);
});

app.get('/api/team', (req, res) => {
  res.json(creatorsDB);
});

const port = 5000;
const server = app.listen(port, () => console.log(server.address()));
