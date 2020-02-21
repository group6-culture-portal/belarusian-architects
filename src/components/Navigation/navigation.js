import React from 'react'
import {NavLink} from 'react-router-dom'
import history from '../../history';
import theme from '../../theme';
import styles from '../styleguide/Styleguide.module.css';
import './navigation.scss'
import { Typography, Button, Select, MenuItem, TextField, StylesProvider } from '@material-ui/core/';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import TimelineIcon from '@material-ui/icons/Timeline';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import MapIcon from '@material-ui/icons/Map';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

const links = [
  {to: '/', label: 'Home', exact: true},
  {to: '/search', label: 'Search', exact: false},
  {to: '/all_directors', label: 'Directors', exact: false},
  {to: '/creators', label: 'Creators', exact: false},
  {to: '/styleguide', label: 'Style guide', exact: false},
  {to: '/workflow', label: 'Workflow', exact: false}
]

const buttonStyle = theme.typography.button;

class Navigation extends React.Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <Button 
        className="menu-button"
        key={index}
        style={buttonStyle}
        >
          <NavLink
          to={link.to}
          exact={link.exact}
          className='nav-link'
          >
            {link.label}
          </NavLink>
        </Button>
      )
    })
  }

  render() {
    console.log(theme)
  return (
      <ul className='nav-wrapper'>
        {this.renderLinks()}
      </ul>
  ) 
  }
}

export default Navigation