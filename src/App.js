import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Styleguide from './components/styleguide/Styleguide';
import './index.css';
import LanguageContext from './context/languageContext';

function DummyComponent() {
  return <h1>Hello</h1>;
}

function App() {
  const [language, setLanguage] = useState('english');
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LanguageContext.Provider value={{ language: language, changeLanguage: setLanguage }}>
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={DummyComponent} />
              <Route path="/search" exact component={DummyComponent} />
              <Route path="/all_directors" exact component={DummyComponent} />
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
