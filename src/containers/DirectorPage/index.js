import React, { useState, useEffect, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getDirector } from '../../apis/getData';
import LanguageContext from '../../context/languageContext';
import TimeLineContainer from '../../components/Director/TimeLineContainer';

import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  table: {
    minWidth: 500,
  },
}));

const Director = props => {
  const [director, setDirector] = useState(null);
  const [dimanicStyles, setDimanicStyles] = useState({});
  const [text, setText] = useState({});

  let { id } = useParams();
  const { language } = useContext(LanguageContext);

  const imageRef = React.useRef();

  useEffect(() => {
    (async directorId => {
      const result = await getDirector(directorId);
      setDirector(result);
      // const img = new Image();
      // img.src = imageRef.current.style.backgroundImage.replace('url("', '').replace('")', '');
      // setHeight(Math.ceil() img.height > 600 ? 600 : img.height);
      // console.log(img.height, Math.min(Math.max(img.height, 300), 600));
      // setHeight(Math.min(Math.max(img.height, 300), 600));
      // setDimanicStyles({ width: img.width, height: img.height });
    })(id);
  }, [id]);
  const classes = useStyles();

  const renderCard = () => {
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            ref={imageRef}
            image={director.photo}
            style={{ margin: '0 auto', maxWidth: 500, maxHeight: 600 }}
            title={director.name[language]}
          />
          <CardContent>
            <Typography variant="h1">{director.name[language]}</Typography>
            <Typography variant="h2">{director.lifetime}</Typography>
            <Typography variant="body1">{director.summary[language]}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  const renderWorks = () => {
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs>
          <Paper className={classes.paper}>{director ? renderCard() : 'loading'}</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            {director ? <TimeLineContainer biography={director.biography} /> : 'Loading'}
          </Paper>
        </Grid>
        <Grid item xs>
          {director ? (
            <Typography variant="body1">
              {console.log(director.works[0][language].title)}
            </Typography>
          ) : (
            'Loading'
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Director;
