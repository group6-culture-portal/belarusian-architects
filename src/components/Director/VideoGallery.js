import React, { useState, useCallback, useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import './VideoGallery';
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

const useVideoGallery = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [videoObj, setVideoObj] = useState([]);
  const imageRender = useCallback(
    ({ index, left, top, key, photo }) => (
      <Image
        key={key}
        margin={'2px'}
        index={index}
        photo={photo}
        left={left}
        top={top}
        open={openLightbox}
      />
    ),
    [videoObj]
  );
  useEffect(() => {
    const result = videos.map(x => {
      return {
        src: `http://img.youtube.com/vi/${x.split('/').pop()}/0.jpg`,
        width: 1,
        height: 0.54,
      };
    });
    setVideoObj(result);
  }, [videos]);

  const Image = ({ index, photo, open }) => {
    return (
      <>
        <img
          className="makeCursor"
          src={photo}
          index={index}
          alt={''}
          margin={'-10px -10px'}
          style={{
            clip: 'rect(50px,480px,300px,0px)',
            objectFit: 'cover',
            maxWidth: 724,
          }}
          onClick={() => open(index)}
          {...photo}
        />
      </>
    );
  };

  const openLightbox = useCallback(index => {
    // const openLightbox = useCallback(event => {
    setCurrentVideo(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentVideo(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <div style={{ width: 724 }}>
        <Gallery photos={videoObj} renderImage={imageRender} margin={0} />
      </div>
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
    </div>
  );
};

export default useVideoGallery;
