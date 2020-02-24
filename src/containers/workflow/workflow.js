import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import languageContext from '../../context/languageContext';
import { Typography, Button } from '@material-ui/core/';

const workflowDB = Object.values(require('./workflow.json').creators).map((creator, index) => {
  creator.id = index;

  return creator;
});
console.log(workflowDB)

let getCreator = (workflowDB, creatorId) => {
  return workflowDB[creatorId]
}

console.log(getCreator(workflowDB, 0))

let creatorsQuantity = Object.keys(workflowDB).length


let row = [...Array(creatorsQuantity)]




const useStyles = makeStyles({
  table: {
    minWidth: 200,
    maxWidth: 375,
    textAlign: "center",
    margin: '0 auto'
  },
});

function createData(name, feature) {
  return { name, feature };
}

const rows = [
  createData('1h', 'qq'),
  createData('2h', 'ww'),
];

export default function Workflow(props) {
  const classes = useStyles();

  const { language } = useContext(languageContext);
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Time spent</TableCell>
            <TableCell align="right">Feature</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.feature}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}