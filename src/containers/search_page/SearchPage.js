import React, { useState, useEffect, useContext } from 'react';
import { searchDirector, getDirectors } from '../../apis/getData';
import LanguageContext from '../../context/languageContext';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Select,
  MenuItem,
} from '@material-ui/core';
import styles from './SearchPage.module.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0 auto',
  },
  media: {
    height: 440,
  },
  link: {
      flexGrow: 1,
    
  },
 

});

const Search = props => {
  const [query, setQuery] = useState('');
  const [directors, setDirectors] = useState([]);
  const { language, changeLanguage } = useContext(LanguageContext);
  const [text, setText] = useState('');
  const [textMoreInfo, setTextMoreInfo] = useState('');
  const [textMoreInfoStyle, setTextMoreInfoStyle] = useState('');
  const [textColor, setTextColor] = useState('');
  
  const classes = useStyles();

  useEffect(() => {
    (async q => {
      if (q !== '') {
        const result = await searchDirector(q);
        setDirectors(result);
      } else {
        const result = await getDirectors();
        setDirectors(result);
      }
    })(query);
  }, [query]);

  useEffect(() => {
    switch (language) {
      case 'bl':
        setText('Пошук');
        setTextMoreInfo('Даведацца больш');
        setTextMoreInfoStyle('outlined');
        setTextColor('black')
        break;
      case 'en':
        setText('Search');
        setTextMoreInfo('Learn more');
        setTextMoreInfoStyle('contained');
        setTextColor('white')
        break;
      case 'ru':
        setText('Поиск');
        setTextMoreInfo('Узнать больше');
        setTextMoreInfoStyle('outlined');
        setTextColor('black')
        break;
    }
  }, [language]);


  const onChangeQuery = e => setQuery(e.target.value);
  const renderDirector = () => {
    const directorList = directors.map(d => {
      return (
       <Card key={d.id} className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={d.photo} title="Contemplative Reptile" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {d.name[language]}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                {d.lifetime}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {d.summary[language]}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Button variant={textMoreInfoStyle} color="primary"  size="small">
          <Link  className={classes.link} to={`/director/${d.id}`}  style={{ color: `${textColor}` }} >{textMoreInfo} </Link>
          </Button>
           <VideoLibraryIcon style={{ fontSize: 28 }} />
          
          </CardActions>
        </Card>
     
      );
      
    });

    return directorList;
  };

  return (
    <div className="wrapper">
      <div>
        <input type="text" placeholder={text} onChange={onChangeQuery} value={query} />
        <Select
          variant="outlined"
          value={language}
          onChange={e => {
            e.preventDefault();
            changeLanguage(e.target.value);
          }}
          style={{ marginLeft: '2%' ,height: '43px' }}
        >
          <MenuItem value="en">EN</MenuItem>
          <MenuItem value="ru">RU</MenuItem>
          <MenuItem value="bl">BL</MenuItem>
        </Select>
      </div>
      <div   className={styles.cards} >{renderDirector()}</div>
      
    </div>
  );
};

export default Search;