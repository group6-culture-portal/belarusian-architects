import React from 'react'
import {NavLink} from 'react-router-dom'
import theme from '../../theme';
import './navigation.scss'
import { Button } from '@material-ui/core/';

const links = [
  {to: '/', label: 'Home', exact: true},
  {to: '/search', label: 'Search', exact: false},
  {to: '/all_directors', label: 'Directors', exact: false},
  {to: '/creators', label: 'Creators', exact: false},
  {to: '/styleguide', label: 'Style guide', exact: false},
  {to: '/workflow', label: 'Workflow', exact: false}
]

class Navigation extends React.Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <Button 
        key={index}
        className="nav-button"
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
    return (
      <ul className='nav-wrapper'>
        {this.renderLinks()}
      </ul>
  ) 
  }
}

export default Navigation