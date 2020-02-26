import React, { useState, useCallback, useEffect, useContext } from 'react';
import languageContext from '../../context/languageContext';
import { Typography } from '@material-ui/core';
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css';

const Gallery2 = ({ photos }) => {
  const { language } = useContext(languageContext);
  const [text, setText] = useState('');

  useEffect(() => {
    switch (language) {
      case 'ru':
        setText('Галерея:');
        break;

      case 'bl':
        setText('Галерэя:');
        break;

      case 'en':
        setText('Gallery:');
        break;

      default:
        break;
    }
  }, [language]);
  return (
    <>
      <Typography variant="h4" style={{ textAlign: 'left', paddingLeft: 25, marginTop: 25 }}>
        {text}
      </Typography>
      <Lightbox
        images={photos.map(x => ({ src: x, title: ' ', description: ' ' }))}
        thumbnailWidth="140px"
        thumbnailHeight="140px"
      />
    </>
  );
};

export default Gallery2;
