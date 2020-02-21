import React, { useState, useEffect } from 'react';
import { Router, Route, Switch, useParams } from 'react-router-dom';
import { getDirector } from './apis/getData';
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
          <Route path="/director/:id" exact component={DummyComponent} />
          <Route path="/creators" exact component={DummyComponent} />
          <Route path="/styleguide" exact component={DummyComponent} />
          <Route path="/workflow" exact component={DummyComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// function Dir() {
//   const [director, setDirector] = useState(null);
//   const { id } = useParams();
//   useEffect(() => {
//     (async directorId => {
//       const result = await getDirector(directorId);
//       setDirector(result);
//     })(id);
//   }, [id]);
//   return director ? (
//     <>
//       <h1>{director.name.en}</h1>
//       <h1>{director.birthPlace['en']}</h1>
//       <h1>{director.lifetime}</h1>
//     </>
//   ) : (
//     'loading'
//   );
// }
