import React, { useContext, useState, useEffect } from 'react';
import languageContext from '../../context/languageContext';
import { Typography, Button } from '@material-ui/core/';
import { getDirectorOfDay } from '../../apis/getData';
import styles from './MainPage.module.css';

export default function MainPage() {
  const { language } = useContext(languageContext);
  const [director, setDirector] = useState(null);
  useEffect(() => {
    (async () => {
      const result = await getDirectorOfDay();
      setDirector(result);
      console.log(result)
    })()
  })
  return (
    <div className={styles.wrapper}>
      <div className={styles.directorText}>
        <Typography variant="subtitle1">
          {language === 'en' ?
          `A theatre director or stage director is a professional in the theatre field who oversees and orchestrates 
          the mounting of a theatre production (a play, opera, musical, or devised piece of work) by unifying various 
          endeavors and aspects of production. The director's function is to ensure the quality and completeness of 
          theatre production and to lead the members of the creative team into realizing their artistic vision for it.
          The director thereby collaborates with a team of creative individuals and other staff, coordinating research, 
          stagecraft, costume design, props, lighting design, acting, set design, stage combat, and sound design for the production.` : 
          language === 'ru' ?
          `Театральный режиссер или режиссер-постановщик - это профессионал в театральной области, который курирует и 
          осуществляет постановку произведения (спектакля, оперы, мюзикла) путем объединения различных начинаний и аспектов работы. 
          Функция режиссера заключается в обеспечении качества и полноты театральной постановки, а также в том, чтобы привести членов 
          творческого коллектива к реализации их художественного видения спектакля. Таким образом, режиссер сотрудничает с командой 
          творческих личностей и другими сотрудниками, координируя исследования, сценографию, дизайн костюмов, реквизит, 
          световое оформление, актерское мастерство, эскиз декораций, сценический поединок и звуковой дизайн спектакля.` :
          `bel`
          }
        
        </Typography>
      </div>
      <div className={styles.card}>
        {director ? 
        <div className={styles.cardContent}>
          <img className={styles.photo} src={director.photo} alt="director of the day photo" />
          <div className={styles.cardText} gutterBottom>
            <Typography variant="h2" style={{fontSize: '40px'}} color="primary">
              {director.name[language]}
            </Typography>
            <Typography variant="subtitle1" style={{fontSize: '22px', fontStyle: 'italic'}} gutterBottom>
              {director.lifetime}
            </Typography>
            <div className={styles.underline}></div>
            <Typography variant="subtitle1" style={{fontSize: '22px'}}>
              {director.summary[language]}
            </Typography>
            <Button variant="contained" color="primary" href="#">
            {language === 'en' ? 'Learn more' : language === 'ru' ? 'Узнать больше' : 'Даведайцеся больш'}
            </Button>
          </div>
        </div>
        : 'Loading'}
      </div>
    </div>
  )
}