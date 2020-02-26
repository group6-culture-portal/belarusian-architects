import React, { useState, useCallback, useEffect, useContext } from 'react';
import languageContext from '../../context/languageContext';
import Lightbox from 'react-lightbox-component';
import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from '@material-ui/core';
import 'react-lightbox-component/build/css/index.css';
import { withStyles } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle1 = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <DialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <Close />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

const DialogContent1 = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(DialogContent);
const VideoGallery2 = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [videoObj, setVideoObj] = useState([]);
  const { language } = useContext(languageContext);
  const [text, setText] = useState('');
  useEffect(() => {
    const result = videos.map((x, index) => {
      return {
        src: `http://img.youtube.com/vi/${x.split('/').pop()}/0.jpg`,
        title: ' ',
        description: ' ',
        idx: index,
        width: '360px',
        height: '195px',
      };
    });
    setVideoObj(result);
  }, [videos]);
  useEffect(() => {
    switch (language) {
      case 'ru':
        setText('Видео:');
        break;

      case 'bl':
        setText('Відэа:');
        break;

      case 'en':
        setText('Videos:');
        break;

      default:
        break;
    }
  }, [language]);

  const openLightbox = useCallback(idx => {
    // const openLightbox = useCallback(event => {
    setCurrentVideo(idx);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentVideo(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <Typography variant="h4" style={{ textAlign: 'left', paddingLeft: 25, marginTop: 25 }}>
        {text}
      </Typography>
      <Lightbox
        images={videoObj}
        renderImageFunc={(idx, image, toggleLightbox, width, height) => {
          console.log(width, height);
          return (
            <img
              key={idx}
              src={image.src}
              style={{
                width: videoObj[idx].width,
                height: videoObj[idx].height,
              }}
              onClick={openLightbox.bind(null, idx)}
            />
          );
        }}
      />
      <Dialog onClose={closeLightbox} aria-labelledby="customized-dialog-title" open={viewerIsOpen}>
        <DialogTitle1 id="customized-dialog-title" onClose={closeLightbox}></DialogTitle1>
        <DialogContent1 style={{ paddingTop: 25 }}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videos[currentVideo].split('/').pop()}`}
            frameBorder="0"
            allow="accelerometer; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
        </DialogContent1>
      </Dialog>
    </>
  );
};

export default VideoGallery2;
