import React, { useContext } from 'react';
import styles from './Styleguide.module.css';
import { Typography, Button, Select, MenuItem, TextField } from '@material-ui/core/';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import TimelineIcon from '@material-ui/icons/Timeline';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import MapIcon from '@material-ui/icons/Map';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import languageContext from '../../context/languageContext';

export default function Styleguide() {
  const { language, changeLanguage } = useContext(languageContext);
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <Typography variant="h4" gutterBottom color="secondary">
          Links
        </Typography>
        <Button href="#" color="secondary">
          HOME
        </Button>
        <Button href="#" color="secondary">
          SEARCH
        </Button>
        <Button href="#" color="secondary">
          STYLEGUIDE
        </Button>
        <Button href="#" color="secondary">
          AUTHORS
        </Button>
      </section>
      <section className={styles.section}>
        <Typography variant="h4" gutterBottom>
          Inputs
        </Typography>
        <TextField label="Search" variant="outlined" />
        <Select
          variant="outlined"
          value={language}
          onChange={e => {
            changeLanguage(e.target.value);
          }}
          style={{ marginLeft: '2%' }}
        >
          <MenuItem value="en">EN</MenuItem>
          <MenuItem value="ru">RU</MenuItem>
          <MenuItem value="bl">BY</MenuItem>
        </Select>
      </section>
      <section className={styles.section}>
        <Typography variant="h4" gutterBottom>
          Buttons
        </Typography>
        <Button size="small" variant="contained" color="primary">Learn more</Button>
        <Button size="medium" variant="outlined" color="primary">Узнать больше</Button>
        <Button size="large" variant="contained" color="primary">
          <VideoLibraryIcon style={{ fontSize: 28 }} />
        </Button>
      </section>
      <section className={styles.section}>
        <Typography variant="h4" gutterBottom>
          Typography
        </Typography>
        <Typography variant="h1">
          h1. Culture portal
        </Typography>
        <Typography variant="h2">
          h2. Heading
        </Typography>
        <Typography variant="h3">
          h3. Heading
        </Typography>
        <Typography variant="h4">
          h4. Heading
        </Typography>
        <Typography variant="subtitle1">
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur 1985
        </Typography>
        <Typography variant="subtitle2">
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1">
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2">
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block">
          button text
        </Typography>
        <Typography variant="caption" display="block">
          caption text
        </Typography>
        <Typography variant="overline" display="block">
          overline text
        </Typography>
      </section>
      <section className={styles.section}>
        <Typography variant="h4" gutterBottom>
          Icons
        </Typography>
        <HomeIcon />
        <TimelineIcon/>
        <ListIcon/>
        <VideoLibraryIcon/>
        <PhotoLibraryIcon/> 
        <MapIcon/>
      </section>
      <section className={styles.section}>
        <Typography variant="h4" gutterBottom>
          Colors
        </Typography>
        <div className={styles.colors}>
          <div className={styles.color} >
          <Typography variant="h3" color="secondary">
            #373737
          </Typography>
          </div>
          <div className={styles.color}>
          <Typography variant="h3" color="primary">
            #F5F5F5
          </Typography>
          </div>
        </div>
      </section>
    </div>
  )
}