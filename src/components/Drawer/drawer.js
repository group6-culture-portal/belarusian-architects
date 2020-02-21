import React, {Component} from 'react'
import './drawer.scss'
import {NavLink} from 'react-router-dom'
import {links} from '../Navigation/navigation' 
import { Button } from '@material-ui/core/';


export default class Drawer extends Component {
  renderLinks() {
    return (
      links.map((link, index) => {
        return (
          
          <Button 
          key={index}
          className="drawer-button"
          >
            <NavLink
            to={link.to}
            exact={link.exact}
            className='drawer-link'
            activeClassName='active-button'
            >
              {link.label}
            </NavLink>
          </Button>
          
        )
      })
    )
  }

render() {
  const cls=['drawer-wrapper'];
  if(!this.props.isOpen) {
    cls.push('close')
  }

  return (
    <React.Fragment>
    <div className={cls.join(' ')}>
      {this.renderLinks()}
    </div>

    </React.Fragment>
)
}
}
