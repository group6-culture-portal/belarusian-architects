import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
} from '@material-ui/core';
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

// const DialogActions1 = withStyles(theme => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(DialogActions);

export default function CustomizedDialogs({ video, name }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const v = video.split('/').pop();

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {name}
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle1 id="customized-dialog-title" onClose={handleClose}></DialogTitle1>
        <DialogContent1 style={{ paddingTop: 25 }}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${v}`}
            frameBorder="0"
            allow="accelerometer; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
        </DialogContent1>
      </Dialog>
    </div>
  );
}
