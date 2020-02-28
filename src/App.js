import React, { useState } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import history from './history';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Styleguide from './containers/styleguide/Styleguide';
import './index.css';
import LanguageContext from './context/languageContext';
import Director from './containers/DirectorPage';

function DummyComponent() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/search">search</Link>
      </li>
      <li>
        <Link to="/all_directors">all_directors</Link>
      </li>
      <li>
        <Link to="/creators">creators</Link>
      </li>
      <li>
        <Link to="/styleguide">styleguide</Link>
      </li>
      <li>
        <Link to="/workflow">workflow</Link>
      </li>
    </ul>
  );
}

function App() {
  const [language, setLanguage] = useState('ru');
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LanguageContext.Provider value={{ language: language, changeLanguage: setLanguage }}>
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={DummyComponent} />
              <Route path="/search" exact component={DummyComponent} />
              <Route path="/all_directors" exact component={DummyComponent} />
              <Route path="/director/:id" exact component={Director} />
              <Route path="/creators" exact component={DummyComponent} />
              <Route path="/styleguide" exact component={Styleguide} />
              <Route path="/workflow" exact component={DummyComponent} />
            </Switch>
          </Router>
        </LanguageContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
