import React, { useContext, useEffect, useState } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import languageContext from '../../context/languageContext';
import { Typography } from '@material-ui/core';

function TimeLineList(items) {
  console.log(items);
  const result = items.map((item, index) => {
    return (
      <TimelineItem key={index} dateText={item.dateText} style={{ color: '#e86971 ' }}>
        <Typography variant="subtitle1" gutterBottom>
          {item.title}
        </Typography>
      </TimelineItem>
    );
  });

  return result;
}

const TimeLineContainer = props => {
  const { biography } = props;

  const { language } = useContext(languageContext);
  const [text, setText] = useState('');

  useEffect(() => {
    switch (language) {
      case 'ru':
        setText('Биография');
        break;

      case 'bl':
        setText('Біяграфія');
        break;

      case 'en':
        setText('Biography');
        break;

      default:
        break;
    }
  }, [language]);

  return (
    <>
      <Typography variant="h2">{text}</Typography>
      <Timeline lineColor={'#ddd'}>{biography ? TimeLineList(biography[language]) : null}</Timeline>
    </>
  );
};

export default TimeLineContainer;
