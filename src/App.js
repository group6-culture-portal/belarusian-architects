import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import LanguageContext from './context/languageContext';

function DummyComponent() {
  return <h1>Hello</h1>;
}

function App() {
  const [language, setLanguage] = useState('english');
  return (
    <div className="App">
      <LanguageContext.Provider value={{ language: language, changeLanguage: setLanguage }}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={DummyComponent} />
            <Route path="/search" exact component={DummyComponent} />
            <Route path="/all_directors" exact component={DummyComponent} />
            <Route path="/creators" exact component={DummyComponent} />
            <Route path="/styleguide" exact component={DummyComponent} />
            <Route path="/workflow" exact component={DummyComponent} />
          </Switch>
        </Router>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
