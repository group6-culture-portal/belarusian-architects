import React, { useContext } from 'react';
import languageContext from '../../context/languageContext';
import { Typography } from '@material-ui/core/';

export default function MainPage() {
  const { language } = useContext(languageContext);
  return (
    <Typography variant="body1">
      {language === 'en' ?
      `A 'theatre director' or stage director is a professional in the theatre field who oversees and orchestrates 
      the mounting of a theatre production (a play, opera, musical, or devised piece of work) by unifying various 
      endeavors and aspects of production. The director's function is to ensure the quality and completeness of 
      theatre production and to lead the members of the creative team into realizing their artistic vision for it.
      The director thereby collaborates with a team of creative individuals and other staff, coordinating research, 
      stagecraft, costume design, props, lighting design, acting, set design, stage combat, and sound design for the production.` : 
      language === 'ru' ?
      `Театральный режиссер" или режиссер-постановщик - это профессионал в театральной области, который курирует и 
      осуществляет постановку произведения (спектакля, оперы, мюзикла) путем объединения различных начинаний и аспектов работы. 
      Функция режиссера заключается в обеспечении качества и полноты театральной постановки, а также в том, чтобы привести членов 
      творческого коллектива к реализации их художественного видения спектакля. Таким образом, режиссер сотрудничает с командой 
      творческих личностей и другими сотрудниками, координируя исследования, сценографию, дизайн костюмов, реквизит, 
      световое оформление, актерское мастерство, эскиз декораций, сценический поединок и звуковой дизайн спектакля.` :
      `bel`
      }
    </Typography>
  )
}