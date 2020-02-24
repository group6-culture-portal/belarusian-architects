import React, {Component} from 'react'
import './drawer.scss'
import {NavLink} from 'react-router-dom'
import {links} from '../Navigation/navigation' 
import { Button } from '@material-ui/core/';
import LanguageContext from '../../context/languageContext';

export default class Drawer extends Component {
  static contextType = LanguageContext;
  
  renderLinks() {
    let languageNumber;
    if (this.context.language === 'en') {
      languageNumber = 0;
    } else if (this.context.language === 'ru') {
      languageNumber = 1;
    } else if (this.context.language === 'bl') {
      languageNumber = 2;
    }
    return (
      links[languageNumber].map((link, index) => {
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
