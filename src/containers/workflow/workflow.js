import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getCreators } from '../../../src/apis/getData'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import languageContext from '../../context/languageContext';
import { Typography, Button, Avatar } from '@material-ui/core/';

const useStyles = makeStyles({
  workflowTable: {
    maxWidth: 1024,
    margin: "0 auto",
    marginTop: 30,
    marginBottom: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "space-around",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  aboutAuthorContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  aboutAuthorTextContainer: {
    margin: "30px 20px 10px 20px"
  },
  table: {
    width: "100%",
  },
  avatar: {
    width: 150,
    height: 150,
    margin: "0 auto",
    marginTop: 20,
    marginLeft: 20,
    display: "inline-block"
  }, 
  h1: {
    fontSize: 30,
    display: "block",
  }
});

function createData(name, feature) {
  return { name, feature };
}


export default function Workflow(props) {
  const [creatorsInfo, setCreatorsInfo] = useState(null);

  useEffect(() => {
    getCreators().then((res)=>{
      setCreatorsInfo(res)
    })
},[])

  
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
      return createData(getWhatIsDone(creatorsInfo, creatorId)[index].time, getWhatIsDone(creatorsInfo, creatorId)[index].task)
    })
  }

if (creatorsInfo) {
  let creatorsEmptyArray = [...Array(numberOfCreators(creatorsInfo))];
  return (
    <React.Fragment>
    <div className={classes.workflowTable}>
    {creatorsEmptyArray.map((creator, index) => {
      return (
      <TableContainer style={{width: "450px", marginBottom: "30px", textAlign: "left"}} key={index} component={Paper}>
            <div className={classes.aboutAuthorContainer}>
              
            <Avatar alt={getCreatorName(creatorsInfo, index)} src={getCreatorAvatar(creatorsInfo, index)} className={classes.avatar} />
            
              <div className={classes.aboutAuthorTextContainer}>
            <Typography size="small" variant="h1" gutterBottom color="primary" className={classes.h1}>
              {getCreatorName(creatorsInfo, index)}
            </Typography>
            <Typography variant="h1" gutterBottom color="primary" className={classes.h1}>
              {"<"}{getCreatorNick(creatorsInfo, index)}{">"}
            </Typography>
              </div>

            </div>

            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>{timeSpent}</TableCell>
                  <TableCell align="center">{feature}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {getRows(getNumberOfTasks(creatorsInfo, index), index).map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row" style={{width: "70px"}}>
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.feature}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
            )  
          })}
    </div>
    </React.Fragment>
  )} else {
    return 'loading'
  }
}