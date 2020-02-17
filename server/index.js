const fs = require('fs');
const express = require('express');
const app = express();

// const DB = JSON.parse(fs.readFileSync('./local.json'));
const DB = Object.values(require('./local.json').directors);
// const DBArray = Object.values(DB);

console.log(DB);
console.log(DB[0]);
// console.log(DBArray);

app.get('/all_directors', (req, res) => {
  res.json(DB);
});

app.get('/director/:id', (req, res) => {
  const result = DB[req.params.id];

  res.json(result);
});

app.get('/search', (req, res) => {});

// const result = Array.from(DB).filter(i => i.name === 'BigBoy');
// console.log(result);
