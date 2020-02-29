import React, {Component} from 'react'
import './mobileNavButton.scss'
import ListIcon from '@material-ui/icons/List';
import CloseIcon from '@material-ui/icons/Close';
import Drawer from '../Drawer/drawer'

export default class MobileNavButton extends Component {
  state= {
    isOpen: false,
  }

render() {
  const cls = ['burger-icon']
  
  const onBurgerClickHandler = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  return (
  <React.Fragment>
  <div 
  className={'mobile-nav-button-wrapper'}
  >
    {!this.state.isOpen 
    ? <ListIcon 
    onClick={onBurgerClickHandler} 
    fontSize="large" 
    className={'burger-icon'}/>
    : <CloseIcon 
    onClick={onBurgerClickHandler} 
    fontSize="large" 
    className={cls.join(' ')}/>}
  </div>

  <Drawer 
  isOpen={this.state.isOpen} 
  />
  {this.state.isOpen ? <div onClick={() => {this.setState({isOpen: !this.state.isOpen})}} className="backdrop" /> : null}
  </React.Fragment>
)
}
}
