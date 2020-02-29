import React, { useContext, useState, useEffect } from 'react';
import languageContext from '../../context/languageContext';
import { Typography, Button } from '@material-ui/core/';
import { Parallax, Background } from 'react-parallax';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './style.module.css';

import Member from '../../components/Member';
import { getCreatorsInfo } from '../../apis/getData';

export default function CreatorsPage(props) {
  const { language } = useContext(languageContext);

  const [creatorsData, setCreatorsData] = useState(null);

  useEffect(() => {
    getCreatorsInfo().then(res => {
      setCreatorsData(res);
    });
  }, []);

  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'Creaters of Culture Portal';
        break;
      case 'ru':
        document.title = 'Создатели Культурного портала';
        break;
      default:
        document.title = 'Сваральнiкi Культурнага партала';
        break;
    }
  }, [language]);

  const getTitle = () => {
    switch (language) {
      case 'en':
        return (
          <>
            <Typography className={styles.title} variant="h1" gutterBottom>
              Creators <br /> <hr />{' '}
            </Typography>
            <Typography className={styles.team} variant="h3" className={styles.team}>
              The team that worked on the project
            </Typography>
          </>
        );
      case 'ru':
        return (
          <>
            <Typography className={styles.title} variant="h1" gutterBottom>
              Создатели <br /> <hr />{' '}
            </Typography>
            <Typography className={styles.team} variant="h3" className={styles.team}>
              Команда которая работала над проектом
            </Typography>
          </>
        );
      case 'bl':
        return (
          <>
            <Typography className={styles.title} variant="h1" gutterBottom>
              Сваральнiкi <br /> <hr />{' '}
            </Typography>
            <Typography className={styles.team} variant="h3" className={styles.team}>
              Каманда, якая працавала над праектам
            </Typography>
          </>
        );
      default:
        break;
    }
  };

  const getMembers = () => {
    return creatorsData.map((item, num) => {
      return (
        <Member
          name={item[language].name}
          key={num}
          language={language}
          github={item.github}
          links={item.links}
          info={item[language].info}
          image={item.image}
        />
      );
    });
  };

  return (
    <div className={styles.creatorsPage}>
      {getTitle()}

      <div className={styles.members}>
        {creatorsData ? (
          getMembers()
        ) : (
          <Backdrop open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </div>
    </div>
  );
}
