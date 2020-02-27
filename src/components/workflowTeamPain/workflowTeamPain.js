import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getCreatorsPain } from '../../apis/getData'

import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core/';
import StarIcon from '@material-ui/icons/Star';

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

  const getHeader = (language) => {
    if (language === 'ru') {
      return "Сложности, с которыми столкнулась команда"
    } else if (language === 'en') {
      return "The difficulties faced by the team"
    } else if (language === 'bl') {
      return "Складанасці, з якімі сутыкнулася каманда"
    }
  }


  if (teamPain) {
  return (
    <React.Fragment>
    <Typography variant="h2" style={{textAlign:"center", marginBottom: 20}}>{getHeader(language)}</Typography>
    <List aria-label="pain">
      {teamPain[selectLanguage(language)].map((element, index) => {
        return (
          <ListItem key={index} style={{alignItems: "center"}}>
            <ListItemIcon style={{textAlign:"center", marginLeft: 20}}>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary={element} />
          </ListItem>
        )
      })}
    </List>
    </React.Fragment>
  )
  } else {
    return ('loading')
  }
}

export default WorkflowTeamPain
