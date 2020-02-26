import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDirector } from '../../apis/getData';
import LanguageContext from '../../context/languageContext';
import TimeLineContainer from '../../components/Director/TimeLineContainer';
import './DirectorPage.scss';
import { makeStyles } from '@material-ui/core/styles';
import Table from '../../components/Director/Table';
import { Grid, Typography } from '@material-ui/core';
import Gallery from '../../components/Director/Gallery';
import VideoGallery from '../../components/Director/VideoGallery';
import { YMaps, Map, GeoObject } from 'react-yandex-maps';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
  },
  paper: {
    // padding: theme.spacing(2),
    backgroundColor: 'none',
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
  table: {
    minWidth: 500,
  },
}));

const Director = props => {
  const [director, setDirector] = useState(null);

  let { id } = useParams();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    (async directorId => {
      const result = await getDirector(directorId);
      setDirector(result);
    })(id);
  }, [id]);
  const classes = useStyles();

  if (director) {
    const [firstname, lastname] = director.name[language].split(' ');
    return (
      <div className="director_page">
        <main className="content">
          <Grid item xs>
            {/* <Paper className={classes.paper}> */}
            <Typography variant="h1">{director.name[language]}</Typography>
            <TimeLineContainer biography={director.biography} />
            <Table rows={director.works[language]} style={{ margin: '0 25px' }} />
            <Gallery photos={director.gallery} />
            {/* </Paper> */}
            <YMaps>
              <Map
                width={724}
                height={400}
                defaultState={{
                  center: [director.map.latitude, director.map.longitude],
                  zoom: 15,
                }}
              >
                <GeoObject
                  geometry={{
                    type: 'Point',
                    coordinates: [director.map.latitude, director.map.longitude],
                  }}
                  options={{ draggable: true }}
                />
              </Map>
            </YMaps>
            {/* {director.videos.map((video, index) => {
              return <Video video={video} name={index} key={video + index} />;
            })} */}
            <VideoGallery videos={director.videos} />
          </Grid>
        </main>
        <aside className="more">
          <div className="director-profile">
            <img src={director.photo} alt={''} />
            <Typography variant="h1">{`${lastname} ${firstname.charAt(0)}.`}</Typography>
            <Typography variant="subtitle1">{director.lifetime}</Typography>
            <Typography variant="body1">{director.summary[language]}</Typography>
            <div className="another_directors">
              <Link to={`/director/${director.prev.id}`}>
                <Typography variant="body1">{director.prev.name[language]}</Typography>
              </Link>
              <Link to={`/director/${director.next.id}`}>
                <Typography variant="body1">{director.next.name[language]}</Typography>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    );
  }
  return <div> loading...</div>;
};

export default Director;
