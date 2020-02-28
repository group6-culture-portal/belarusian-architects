import React, { useState, useEffect, useContext } from 'react';
import { Typography } from '@material-ui/core';
import Lightbox from 'react-lightbox-component';

import languageContext from '../../context/languageContext';
import 'react-lightbox-component/build/css/index.css';

const Gallery = ({ photos }) => {
  const { language } = useContext(languageContext);
  const [text, setText] = useState('');

  useEffect(() => {
    switch (language) {
      case 'ru':
        setText('Галерея');
        break;

      case 'bl':
        setText('Галерэя');
        break;

      case 'en':
        setText('Gallery');
        break;

      default:
        break;
    }
  }, [language]);
  return (
    <>
      <div
        style={{
          backgroundColor: '#343434',
          color: '#fff',
          textAlign: 'center',
          borderRadius: 4,
        }}
      >
        <Typography variant="h4" style={{ textAlign: 'left', paddingLeft: 15, marginTop: 25 }}>
          {text}
        </Typography>
      </div>
      <Lightbox
        images={photos.map(x => ({ src: x, title: ' ', description: ' ' }))}
        thumbnailWidth="160px"
        thumbnailHeight="160px"
      />
    </>
  );
};

export default Gallery;
