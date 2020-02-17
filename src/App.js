import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

function DummyComponent() {
  return <h1>Hello</h1>;
}

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
