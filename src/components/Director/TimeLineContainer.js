import React, { useContext } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Typography } from '@material-ui/core';

import languageContext from '../../context/languageContext';
import './Timeline.scss';

function TimeLineList(items) {
  const result = items.map((item, index) => {
    return (
      <TimelineItem
        key={index}
        dateText={item.dateText}
        style={{ color: '#e86971' }}
        dateInnerStyle={{ background: '#373737', color: '#ffffff' }}
        bodyContainerStyle={{
          background: '#f5f5f5',
          borderRadius: '8px',
          boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          padding: '1px 21px',
          textAlign: 'justify',
        }}
      >
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

  return <Timeline lineColor={'#ddd'}>{biography && TimeLineList(biography[language])}</Timeline>;
};

export default TimeLineContainer;
