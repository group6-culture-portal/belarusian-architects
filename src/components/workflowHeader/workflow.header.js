import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';

import languageContext from '../../context/languageContext';
import { Typography } from '@material-ui/core/';

function WorkflowHeader(props) {

  const { language } = useContext(languageContext);

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

  return (
  <div className={classes.header}>
      <Typography size="small" variant="h1" gutterBottom color="primary" className={classes.h1}>
      {language === 'en' ? "Workflow" : null}
      {language === 'ru' ? "Процесс разработки" : null}
      {language === 'bl' ? "Працэс працы" : null}
      </Typography>
      <Typography size="small" variant="h2" gutterBottom color="primary" style={{fontSize: '20px'}}>
      {language === 'en' ? "This page shows the development process, the working hours of each developer, the main difficulties the team encountered, and the growth path of each programmer" : null}
      {language === 'ru' ? "Эта страница показывает процесс разработки, время работы каждого разработчика, основные трудности, с которыми столкнулась команда, и путь роста каждого программиста" : null}
      {language === 'bl' ? "Гэтая старонка паказвае працэс распрацоўкі, час працы кожнага разработчика, асноўныя цяжкасці, з якімі сутыкнулася каманда, і шлях росту кожнага праграміста" : null}
      </Typography>
    </div>
  )
}

export default WorkflowHeader
