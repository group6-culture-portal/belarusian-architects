import React from 'react'
import {NavLink,useLocation, useHistory} from 'react-router-dom'
import './navigation.scss'
import { Button } from '@material-ui/core/';
import MobileNavButton from '../MobileNavButton/mobileNavButton'

export const links = [
  {to: '/', label: 'Home', exact: true},
  {to: '/search', label: 'Search', exact: false},
  {to: '/all_directors', label: 'Directors', exact: false},
  {to: '/creators', label: 'Creators', exact: false},
  {to: '/styleguide', label: 'Style guide', exact: false},
  {to: '/workflow', label: 'Workflow', exact: false}
]

// class Navigation extends React.Component {
//   state = { show: true };
//   componentDidUpdate(){
//     const path =useLocation();
//     const result = links.findIndex(l => l.to === path);
//     console.log(result)
// if (result !== -1) {
// this.setState({show: false});}
//   }
//   renderLinks() {
//     return links.map((link, index) => {
//       return (
//         <Button 
//         key={index}
//         className="nav-button"
//         >
//           <NavLink
//           to={link.to}
//           exact={link.exact}
//           className='nav-link'
//           >
//             {link.label}
//           </NavLink>
//         </Button>
//       )
//     })
//   }

//   render() {
//     return (
//       this.state.show&&
//       <React.Fragment>
//       <ul className='nav-wrapper'>
//         {this.renderLinks()}
//       </ul>
//       <MobileNavButton ></MobileNavButton>
//       </React.Fragment>
//   ) 
//   }
// }
const Navigation = () => {
  const [show, setShow] = React.useState(true);
  const history = useHistory();
  // const location = useLocation();
  React.useEffect(() => {
    const {pathname} = history.location;
    if (links.findIndex(l => l.to === pathname) !==-1) setShow(true);
    else setShow(false);
  }, [history.location.pathname]);

  const renderLinks = () => {
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

    return (
 show&&
      <React.Fragment>
      <ul className='nav-wrapper'>
        {renderLinks()}
      </ul>
      <MobileNavButton ></MobileNavButton>
      </React.Fragment>
  )
}

export default Navigation