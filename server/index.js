const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const DB = Object.values(require('./local.json').directors).map((director, index) => {
  director.id = index;

  return director;
});

const workflowsDB = Object.values(require('./workflow.json').creators);

const workflowTeamPainDB = Object.values(require('./workflow.json').teamPain);

const workflowSelfEvaluationDB = Object.values(require('./workflow.json').selfEvaluation);

const creatorsDB = Object.values(require('./creators.json').members);

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
  const result = DB[req.params.id];
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

app.get('/api/workflows', (req, res) => {
  res.json(workflowsDB);
});

app.get('/api/workflowsTeamPain', (req, res) => {
  res.json(workflowTeamPainDB);
});

app.get('/api/workflowSelfEvaluation', (req, res) => {
  res.json(workflowSelfEvaluationDB);
});

const port = 5000;
const server = app.listen(port, () => console.log(server.address()));
