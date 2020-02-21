import { useContext, useEffect, useState } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import languageContext from '../../context/languageContext';

function TimeLineList(items) {
  const result = items.map((item, index) => {
    <TimelineItem key={index} dateText={item.dateText} style={{ color: '#e86971 ' }}>
      <h3>{item.title}</h3>
    </TimelineItem>;
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
      <h2>{text}</h2>
      <Timeline lineColor={'#ddd'}>{TimeLineList(biography)}</Timeline>
    </>
  );
};

export default TimeLineContainer;
