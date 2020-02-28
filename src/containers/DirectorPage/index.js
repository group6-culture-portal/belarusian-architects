import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { YMaps, Map, GeoObject } from 'react-yandex-maps';
import { Grid, Typography } from '@material-ui/core';
import Lightbox from 'react-lightbox-component';

import TimeLineContainer from '../../components/Director/TimeLineContainer';
import Table from '../../components/Director/Table';
import Gallery from '../../components/Director/Gallery';
import VideoGallery from '../../components/Director/VideoGallery';

import LanguageContext from '../../context/languageContext';
import { getDirector } from '../../apis/getData';

import './DirectorPage.scss';
const Director = props => {
  const [director, setDirector] = useState(null);

  let { id } = useParams();
  const { language } = useContext(LanguageContext);
  const [text, setText] = useState('');

  useEffect(() => {
    switch (language) {
      case 'ru':
        setText('Театр');
        break;

      case 'bl':
        setText('Тэатр');
        break;

      case 'en':
        setText('Theater');
        break;

      default:
        break;
    }
  }, [language]);

  useEffect(() => {
    (async directorId => {
      const result = await getDirector(directorId);
      setDirector(result);
    })(id);
  }, [id]);

  if (director) {
    const [firstname, lastname] = director.name[language].split(' ');
    return (
      <div className="director_page">
        <main className="content">
          <Grid item xs>
            <Typography variant="h1" style={{ padding: '25px 0' }}>
              {director.name[language]}
            </Typography>
            <TimeLineContainer biography={director.biography} />
            <Table rows={director.works[language]} style={{ margin: '0 25px' }} />
            <Gallery photos={director.gallery} />
            <div
              style={{
                backgroundColor: '#343434',
                color: '#fff',
                textAlign: 'center',
                marginBottom: 10,
                borderRadius: 4,
              }}
            >
              <Typography
                variant="h4"
                style={{ textAlign: 'left', paddingLeft: 15, marginTop: 25 }}
              >
                {text}
              </Typography>
            </div>
            <YMaps className="roundedBorders">
              <Map
                width={'90%'}
                height={400}
                style={{
                  marginLeft: '5%',
                  marginRight: '5%',
                  height: 400,
                }}
                className="roundedBorders"
                defaultState={{
                  center: [director.map.latitude, director.map.longitude],
                  zoom: 15,
                }}
              >
                <GeoObject
                  className="roundedBorders"
                  geometry={{
                    type: 'Point',
                    coordinates: [director.map.latitude, director.map.longitude],
                  }}
                  options={{ draggable: true }}
                />
              </Map>
            </YMaps>
            <VideoGallery videos={director.videos} />
          </Grid>
        </main>
        <aside className="more">
          <div className="director-profile">
            <Lightbox
              images={[
                {
                  src: director.photo,
                  title: director.name[language],
                  description: ' ',
                },
              ]}
              renderImageFunc={(idx, image, toggleLightbox) => {
                return (
                  <img
                    key={idx}
                    className="makeCursor"
                    src={image.src}
                    alt={director.name[language]}
                    style={{
                      width: 270,
                      height: 370,
                      borderRadius: 8,
                    }}
                    onClick={toggleLightbox.bind(null, idx)}
                  />
                );
              }}
            />
            <Typography variant="h1">{`${lastname} ${firstname.charAt(0)}.`}</Typography>
            <Typography variant="subtitle1">{director.lifetime}</Typography>
            <Typography variant="body1">{director.summary[language]}</Typography>
          </div>
        </aside>
      </div>
    );
  }
  return <div> loading...</div>;
};

export default Director;

/* <div className="another_directors">
              <Link to={`/director/${director.prev.id}`}>
                <Typography variant="body1">
                  <NavigateBefore fontSize="small" />
                  {director.prev.name[language]}
                </Typography>
              </Link>
              <Link to={`/director/${director.next.id}`}>
                <Typography variant="body1">
                  <NavigateNext fontSize="small" />
                  {director.next.name[language]}
                </Typography>
              </Link>
            </div> */
