import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getCreatorsPain } from '../../apis/getData'

import languageContext from '../../context/languageContext';
import { Typography } from '@material-ui/core/';

function WorkflowTeamPain(props) {
  const { language } = useContext(languageContext);

  let selectLanguage = (language) => {
    if (language === 'en') {
      return 0;
    } else if (language === 'ru') {
      return 1;
    } else if (language === 'bl') {
      return 2
    }
  }

  const [teamPain, setTeamPain] = useState(null);

  useEffect(() => {
    getCreatorsPain().then((res)=>{
      setTeamPain(res)
    })
},[])
if(teamPain) {  console.log(teamPain)}
  

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

  if (teamPain) {
  return (
  <div>
    {teamPain[selectLanguage(language)]}
  </div>
  )
  } else {
    return ('loading')
  }
}

export default WorkflowTeamPain
