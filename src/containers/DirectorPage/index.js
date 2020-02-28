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
  const { screanHeight, screanWidth } = useWindowDimensions();
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

  const renderProfilePicture = (width = 270, height = 370) => {
    return (
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
                width: width,
                height: height,
                borderRadius: 8,
              }}
              onClick={toggleLightbox.bind(null, idx)}
            />
          );
        }}
      />
    );
  };

  const renderProfile = () => {
    if (screanWidth > 992) {
      const [firstname, lastname] = director.name[language].split(' ');
      return (
        <>
          {renderProfilePicture()}
          <Typography
            variant="h1"
            className="director-description"
          >{`${lastname} ${firstname.charAt(0)}.`}</Typography>
          <Typography variant="subtitle1" className="director-description">
            {director.lifetime}
          </Typography>
          <Typography variant="body1" className="director-description">
            {director.summary[language]}
          </Typography>
        </>
      );
    } else if (screanWidth > 600) {
      return (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '40%' }}>{renderProfilePicture('100%', 'auto')}</div>
            <div style={{ width: '60%' }}>
              <Typography variant="h1" style={{ marginBottom: 25, width: '100%' }}>
                {director.name[language]}
              </Typography>
              <Typography variant="subtitle1" className="director-description">
                {director.lifetime}
              </Typography>
              <Typography variant="body1" className="director-description">
                {director.summary[language]}
              </Typography>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        {renderProfilePicture('100%', 'auto')}

        <Typography variant="h1" style={{ marginBottom: 25, width: '100%' }}>
          {director.name[language]}
        </Typography>
        <Typography variant="subtitle1" className="director-description">
          {director.lifetime}
        </Typography>
        <Typography variant="body1" className="director-description">
          {director.summary[language]}
        </Typography>
      </>
    );
  };

  if (director) {
    return (
      <div className="director_page">
        <main className="content">
          <Grid item xs>
            {screanWidth > 991 && (
              <Typography variant="h1" style={{ marginBottom: 25 }}>
                {director.name[language]}
              </Typography>
              // <div className="description-small-screen">
              //   <Typography variant="subtitle1" className="director-description">
              //     {director.lifetime}
              //   </Typography>
              //   <Typography variant="body1" className="director-description">
              //     {director.summary[language]}
              //   </Typography>
              // </div>
            )}
            <TimeLineContainer biography={director.biography} />
            <Table rows={director.works[language]} style={{ margin: '0 25px' }} />
            <Gallery photos={director.gallery} />
            <div className="section-title">
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
          <div className="director-profile">{renderProfile()}</div>
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
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    screanWidth: width,
    screenHeight: height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
