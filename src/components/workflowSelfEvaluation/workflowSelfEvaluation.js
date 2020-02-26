import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getCreatorsSelfEvaluation } from '../../apis/getData'

import languageContext from '../../context/languageContext';
import { Typography, TableRow } from '@material-ui/core/';

function WorkflowSelfEvaluation(props) {
  const { language } = useContext(languageContext);

  const [workflowSelfEvaluation, setWorkflowSelfEvaluation] = useState(null);

  useEffect(() => {
    getCreatorsSelfEvaluation().then((res)=>{
      setWorkflowSelfEvaluation(res)
    })
},[])
if(workflowSelfEvaluation) {  console.log(workflowSelfEvaluation)}
  

  const useStyles = makeStyles({
    header: {
      maxWidth: 1024,
      textAlign: "center",
      margin: "0 auto",
      marginTop: 20
    },
    h1: {
      fontSize: 40,
      display: "block",
    }
  });
  
  const classes = useStyles();

  const getTask = (element, language) => {
    return element.task[language]
  }

  const getScore = (element) => {
    return element.score
  }

  const getCheckbox = (element) => {
    return element.checkbox
  }

  if (workflowSelfEvaluation) {
  return (
  <table>
    <thead>
      <tr>
        <td>Task</td>
        <td>Is task done?</td>
        <td>Score</td>
      </tr>
    </thead>
    <tbody>
    {workflowSelfEvaluation.map((element, index) => {
      return (
      <tr>
      <td key={index}>{getTask(element, language)}</td>
      <td key={index}>{getCheckbox(element)}</td>
      <td key={index}>{getScore(element, language)}</td>
      </tr>
      )
    })}
    </tbody>
    
  
  </table>
  )
  } else {
    return ('loading')
  }
}

export default WorkflowSelfEvaluation
