import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './navigation.scss';
import languageContext from '../../context/languageContext';
import { Button, Select, MenuItem } from '@material-ui/core/';
import MobileNavButton from '../MobileNavButton/mobileNavButton';

export const links = [
  [
    { to: '/', label: 'Home', exact: true },
    { to: '/search', label: 'Search', exact: false },
    // {to: '/all_directors', label: 'Directors', exact: false},
    { to: '/creators', label: 'Creators', exact: false },
    { to: '/styleguide', label: 'Styleguide', exact: false },
    { to: '/workflow', label: 'Workflow', exact: false },
  ],
  [
    { to: '/', label: 'Домой', exact: true },
    { to: '/search', label: 'Поиск', exact: false },
    // {to: '/all_directors', label: 'Режиссеры', exact: false},
    { to: '/creators', label: 'Создатели', exact: false },
    { to: '/styleguide', label: 'Стили', exact: false },
    { to: '/workflow', label: 'Этапы работы', exact: false },
  ],
  [
    { to: '/', label: 'Дадому', exact: true },
    { to: '/search', label: 'Пошук', exact: false },
    // {to: '/all_directors', label: 'Рэжысёры', exact: false},
    { to: '/creators', label: 'Стваральнікі', exact: false },
    { to: '/styleguide', label: 'Стылі', exact: false },
    { to: '/workflow', label: 'Этапы працы', exact: false },
  ],
];

const Navigation = () => {
  const [show, setShow] = React.useState(true);
  const history = useHistory();
  const { language } = useContext(languageContext);

  React.useEffect(() => {
    const { pathname } = history.location;
    if (links.findIndex(l => l.to === pathname) !== -1) setShow(true);
    else setShow(false);
  }, [history.location.pathname]);

  let renderLinks = language => {
    let languageNumber;
    if (language === 'en') {
      languageNumber = 0;
    } else if (language === 'ru') {
      languageNumber = 1;
    } else if (language === 'bl') {
      languageNumber = 2;
    }

    return links[languageNumber].map((link, index) => {
      return (
        <Button key={index} className="nav-button">
          <NavLink to={link.to} exact={link.exact} className="nav-link">
            {link.label}
          </NavLink>
        </Button>
      );
    });
  };

  return (
    show && (
      <React.Fragment>
        <ul className="nav-wrapper">
          <div className="select-wrapper">
            <Select
              id="Select"
              variant="outlined"
              value="en"
              onChange={e => {
                e.preventDefault();
                let currentLanguage = e.target.value;
                const selectElement = document.getElementById('Select');

                changeLanguage(currentLanguage);

                if (currentLanguage === 'ru') {
                  selectElement.innerHTML = 'RU';
                } else if (currentLanguage === 'bl') {
                  selectElement.innerHTML = 'BY';
                } else if (currentLanguage === 'en') {
                  selectElement.innerHTML = 'EN';
                }
              }}
              style={{
                marginLeft: '2%',
                marginRight: '2%',
                color: '#373737',
                backgroundColor: '#F5F5F5',
                border: 'none',
                height: '40px',
                width: '65px',
                marginTop: '10px',
                borderLeft: 'none',
              }}
            >
              <MenuItem value="en">EN</MenuItem>
              <MenuItem value="ru">RU</MenuItem>
              <MenuItem value="bl">BY</MenuItem>
            </Select>
          </div>
          {renderLinks(language)}
        </ul>
        <MobileNavButton></MobileNavButton>
      </React.Fragment>
    )
  );
};

export default Navigation;
