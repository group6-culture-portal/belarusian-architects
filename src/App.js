import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Styleguide from './containers/styleguide/Styleguide';
import MainPage from './containers/main_page/MainPage';
import './index.css';

function DummyComponent() {
  return <h1>Hello</h1>;
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/search" exact component={DummyComponent} />
            <Route path="/all_directors" exact component={DummyComponent} />
            <Route path="/creators" exact component={DummyComponent} />
            <Route path="/styleguide" exact component={Styleguide} />
            <Route path="/workflow" exact component={DummyComponent} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
