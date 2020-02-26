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
import WorkflowHeader from '../../components/workflowHeader/workflow.header'
import { numberOfCreators, getCreatorName, getCreatorNick, getCreatorAvatar, getWhatIsDone, getNumberOfTasks } from './assistFunctions'

import languageContext from '../../context/languageContext';
import { Typography, Avatar } from '@material-ui/core/';

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

  let timeSpent, feature

  switch(language) {
    case 'en': 
    timeSpent = "Time spent";
    feature = "Feature";
    break;
    case 'ru': 
    timeSpent = "Потрачено времени";
    feature = "Сделано";
    break;
    case 'bl': 
    timeSpent = "Выдаткавана часу";
    feature = "Зроблена";
    break;
    default: 
    timeSpent = null;
    feature = null;
  }

  let getRows = (numberOfTasks, creatorId) => {
    let tasksArray = [...Array(numberOfTasks)];
    return tasksArray = tasksArray.map((element, index) => {
      return createData(getWhatIsDone(creatorsInfo, creatorId, language)[index].time, getWhatIsDone(creatorsInfo, creatorId, language)[index].task)
    })
  }

if (creatorsInfo) {
  let creatorsEmptyArray = [...Array(numberOfCreators(creatorsInfo))];
  return (
    <React.Fragment>
    <WorkflowHeader />
    <div className={classes.workflowTable}>
    {creatorsEmptyArray.map((creator, index) => {
      return (
      <TableContainer style={{width: "450px", marginBottom: "30px", textAlign: "left"}} key={index} component={Paper}>
            <div className={classes.aboutAuthorContainer}>
              
            <Avatar alt={getCreatorName(creatorsInfo, index, language)} src={getCreatorAvatar(creatorsInfo, index)} className={classes.avatar} />
            
              <div className={classes.aboutAuthorTextContainer}>
            <Typography size="small" variant="h1" gutterBottom color="primary" className={classes.h1}>
              {getCreatorName(creatorsInfo, index, language)}
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
                {getRows(getNumberOfTasks(creatorsInfo, index, language), index).map(row => (
                  <TableRow key={index + (Math.random()) * 10000}>
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
    return 'Server did not respond or page is loading'
  }
}