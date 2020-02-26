import React, { useState, useCallback, useEffect, useContext } from 'react';
import languageContext from '../../context/languageContext';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Typography } from '@material-ui/core';

const useWorkPlease = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photoObj, setPhotoObj] = useState([]);

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

  useEffect(() => {
    const result = photos.map(x => {
      return {
        src: x,
        width: 1,
        height: 1,
      };
    });
    setPhotoObj(result);
  }, [photos]);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <Typography variant="h4" style={{ textAlign: 'left', paddingLeft: 25, marginTop: 25 }}>
        {text}
      </Typography>
      <Gallery photos={photoObj} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photoObj.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
};

export default useWorkPlease;
