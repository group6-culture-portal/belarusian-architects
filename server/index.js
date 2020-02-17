const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// const DB = JSON.parse(fs.readFileSync('./local.json'));
const DB = Object.values(require('./local.json').directors);
// const DBArray = Object.values(DB);

console.log(DB);
console.log(DB[0]);
// console.log(DBArray);

app.get('/api/all_directors', (req, res) => {
  res.json(DB);
});

app.get('/api/director/:id', (req, res) => {
  const result = DB[req.params.id];

  res.json(result);
});
let counter = 0;
app.get('/api/search', (req, res) => {
  // var circ = {};
  // circ.circ = circ;
  // var cache = [];
  // fs.writeFileSync(
  //   `./tmp${counter}.json`,
  //   JSON.stringify(req, function(key, value) {
  //     if (typeof value === 'object' && value !== null) {
  //       if (cache.indexOf(value) !== -1) {
  //         // Duplicate reference found, discard key
  //         return;
  //       }
  //       // Store value in our collection
  //       cache.push(value);
  //     }
  //     return value;
  //   }),
  //   {
  //     encoding: 'utf8',
  //     mode: 2,
  //     flag: 'a',
  //   }
  // );
  // cache = null;
  // counter++;
  const query = req.query.query;

  const result = DB.filter(i => i.nam);
  res.json('hi');
});

const port = 5000;
const server = app.listen(port, () => {
  console.log('Listening on port ' + server.address().port);
});

module.exports = server;
