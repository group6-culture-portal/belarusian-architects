import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getCreatorsSelfEvaluation } from '../../apis/getData'

import languageContext from '../../context/languageContext';
import { Typography, TableRow } from '@material-ui/core/';
import { Checkbox } from '@material-ui/core';

function WorkflowSelfEvaluation(props) {
  const { language } = useContext(languageContext);

  const [workflowSelfEvaluation, setWorkflowSelfEvaluation] = useState(null);

  useEffect(() => {
    getCreatorsSelfEvaluation().then((res)=>{
      setWorkflowSelfEvaluation(res)
    })
},[])

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
    },
    table: {
      position: "relative",
      borderColor: "rgb(128, 128, 128)",
      borderCollapse: "collapse",
      color: "rgba(0, 0, 0, 0.87)",
      display: "table",
      height: 235,
      textAlign: "left",
      width: "90%",
      margin: "0 auto",
      marginBottom: 20,
      marginTop: 20
    },
    tr: {
      display: "table-row",
      height: 56.5,
      outlineColor: "rgba(0, 0, 0, 0.870588)",
      outlineStyle: "none",
      outlineWidth: 0,
      textAlign: "center",
      verticalAlign: "middle",
      width: 450
    },
    td: {
      border: "1px solid rgb(224, 224, 224)",
      borderCollapse: "collapse",
      display: "table-cell",
      fontFamily: "Alegreya Sans",
      fontSize: 14,
      fontWeight: "normal",
      textAlign: "center",
      verticalAlign: "middle",
      width: 316
    },
  });
  
  const classes = useStyles();

  const getTask = (element, language) => {
    return element.task[language]
  }

  const getScore = (element) => {
    return element.score
  }

  let getTotalScore = (dataBase) => {
    let numbersToSum = [];
    dataBase.map((element, index) => {
      if (element.checkbox && element.score > 0) {
        numbersToSum.push(element.score)
      }
      return numbersToSum
    })
    return numbersToSum.reduce((acc,next) => {
      return acc + next
    }, 0)
  }

  const getCheckbox = (element) => {
    if (element.checkbox) {
    return (
    <Checkbox
      checked={true}
      color="primary"
      disabled={true}
      size="medium"
    />)} else {
      return (
    <Checkbox
      color="primary"
      disabled={true}
      size="medium"
    />
      )
    }
  }

  const changeTableLanguage = (language) => {
    let lang = {
      en: {
        task: "Task",
        isDone: "Is task done?",
        score: "Score",
        total: "Total score: "
      },
      ru: {
        task: "Задача",
        isDone: "Задача выполнена?",
        score: "Баллы",
        total: "Общий балл",
      },
      bl: {
        task: "Задача",
        isDone: "Задача выканана?",
        score: "Балы",
        total: "Агульны бал",
      }
    };
    return lang[language]
  }

  let trLanguage = changeTableLanguage(language)

  if (workflowSelfEvaluation) {
  return (
  <React.Fragment>
  <Typography variant="h2" style={{textAlign: "center"}}>Evaluation</Typography>
  <table className={classes.table}>
    <thead>
      <tr className={classes.tr}>
        <td className={classes.td}>{trLanguage.task}</td>
        <td className={classes.td}>{trLanguage.isDone}</td>
        <td className={classes.td}>{trLanguage.score}</td>
      </tr>
    </thead>
    <tbody>
    {workflowSelfEvaluation.map((element, index) => {
      return (
      <tr key={index} className={classes.tr}>
      <td className={classes.td}>{getTask(element, language)}</td>
      <td className={classes.td}>{getCheckbox(element)}</td>
      <td className={classes.td}>{getScore(element, language)}</td>
      </tr>
      )
    })}
    <tr className={classes.tr}>
    <td colSpan="2" className={classes.td}>{trLanguage.total}</td>
    <td className={classes.td}>{getTotalScore(workflowSelfEvaluation)}</td>
    </tr>
    </tbody>
  </table>
  </React.Fragment>
  )
  } else {
    return ('loading')
  }
}

export default WorkflowSelfEvaluation
