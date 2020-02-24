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
import { Typography, Button, Avatar } from '@material-ui/core/';

const workflowDB = Object.values(require('./workflow.json').creators).map((creator, index) => {
  creator.id = index;

  return creator;
});

const useStyles = makeStyles({
  table: {
    minWidth: 200,
    maxWidth: "100%"
  },
  workflowTable: {
    maxWidth: 1024,
    margin: "0 auto",
    marginTop: 30,
    marginBottom: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "space-around",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  avatar: {
    width: 100,
    height: 100,
    margin: "0 auto"
  }
});

function createData(name, feature) {
  return { name, feature };
}


export default function Workflow(props) {
  const classes = useStyles();

  const { language } = useContext(languageContext);

  let timeSpent, feature, creatorName, creatorNickName;

  switch(language) {
    case 'en': 
    timeSpent = "Time spent";
    feature = "Feature";
    creatorName = "Name: ";
    creatorNickName = "Nickname: ";
    break;
    case 'ru': 
    timeSpent = "Потрачено времени";
    feature = "Сделано";
    creatorName = "Имя: ";
    creatorNickName = "Ник: ";
    break;
    case 'bl': 
    timeSpent = "Выдаткавана часу";
    feature = "Зроблена";
    creatorName = "iмя: ";
    creatorNickName = "Нік: ";
  }

  const numberOfCreators = (workflowDB) => {
    return workflowDB.length
  }
  
  let creatorsEmptyArray = [...Array(numberOfCreators(workflowDB))];

  const getCreator = (workflowDB, creatorId) => {
    return workflowDB[creatorId]
  }

  let getCreatorName = (workflowDB, creatorId) => {
    return workflowDB[creatorId].name[language]
  }
  
  let getCreatorNick = (workflowDB, creatorId) => {
    return workflowDB[creatorId].nick
  }

  let getCreatorAvatar = (workflowDB, creatorId) => {
    return workflowDB[creatorId].avatar
  }

  let getWhatIsDone = (workflowDB, creatorId) => {
    return workflowDB[creatorId].whatIsDone[language]
  }

  let getNumberOfTasks = (workflowDB, creatorId) => {
    return workflowDB[creatorId].whatIsDone[language].length
  }


  let getRows = (numberOfTasks, creatorId) => {
    let tasksArray = [...Array(numberOfTasks)];
    return tasksArray = tasksArray.map((element, index) => {
      return createData(getWhatIsDone(workflowDB, creatorId)[index].time, getWhatIsDone(workflowDB, creatorId)[index].task)
    })
  }

  return (
    <div className={classes.workflowTable}>
    {creatorsEmptyArray.map((creator, index) => {
      return ( 
      <TableContainer style={{width: "inherit", marginBottom: "30px", textAlign: "left"}} key={index} component={Paper}>
            <div>
            <Typography size="small" variant="h1" gutterBottom color="primary">
              {creatorName}{getCreatorName(workflowDB, index)}
            </Typography>
            <Typography variant="h1" gutterBottom color="primary">
              {creatorNickName}{getCreatorNick(workflowDB, index)}
            </Typography>
              <Avatar alt={getCreatorName(workflowDB, index)} src={getCreatorAvatar(workflowDB, index)} className={classes.avatar} />
            </div>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>{timeSpent}</TableCell>
                  <TableCell align="right">{feature}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {getRows(getNumberOfTasks(workflowDB, index), index).map(row => (
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
            )  
          })}
    </div>
  );
}