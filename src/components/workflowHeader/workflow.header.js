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
      margin: "0 auto"
    }
  });
  
  const classes = useStyles();

  return (
  <div className={classes.header}>
      <Typography size="small" variant="h1" gutterBottom color="primary" className={classes.h1}>
      {language === 'en' ? <h1 variant="h1">Workflow</h1> : null}
      {language === 'ru' ? <h1 variant="h1">Процесс разработки</h1> : null}
      {language === 'bl' ? <h1 variant="h1">Працэс працы</h1> : null}
      </Typography>
      <Typography size="small" variant="h2" gutterBottom color="primary" style={{fontSize: '20px'}}>
      {language === 'en' ? <h2>This page shows the development process, the working hours of each developer, the main difficulties the team encountered, and the growth path of each programmer.</h2> : null}
      {language === 'ru' ? <h2>Эта страница показывает процесс разработки, время работы каждого разщработчика, основные трудности, с которыми столкнулась команда, и путь роста каждого программиста</h2> : null}
      {language === 'bl' ? <h2>Гэтая старонка паказвае працэс распрацоўкі, час працы кожнага разщработчика, асноўныя цяжкасці, з якімі сутыкнулася каманда, і шлях росту кожнага праграміста</h2> : null}
      </Typography>
    </div>
  )
}

export default WorkflowHeader
