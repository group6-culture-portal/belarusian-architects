import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Styleguide from './containers/styleguide/Styleguide';
import MainPage from './containers/main_page/MainPage';
import CreatortPage from './containers/creators_page/index.jsx';
import Search from './containers/search_page/SearchPage';

import LanguageContext from './context/languageContext';
import Navigation from './components/Navigation/navigation'
import './index.css';


function DummyComponent() {
  return <h1>Hello</h1>;
}

function App() {
  const [language, setLanguage] = useState('en');
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LanguageContext.Provider value={{ language: language, changeLanguage: setLanguage }}>
          <Router history={history}>
            <Navigation></Navigation>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/search" exact component={Search} />
              <Route path="/all_directors" exact component={DummyComponent} />
              <Route path="/creators" exact component={CreatortPage} />
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
