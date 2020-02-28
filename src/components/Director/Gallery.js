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
      <div className="section-title">
        <Typography
          variant="h4"
          className="section-title"
          style={{ textAlign: 'left', paddingLeft: 15, marginTop: 25, marginBottom: 5 }}
        >
          {text}
        </Typography>
      </div>
      <Lightbox images={photos.map(x => ({ src: x, title: ' ', description: ' ' }))} />
    </>
  );
};

export default Gallery;
