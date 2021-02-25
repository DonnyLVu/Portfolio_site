// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/home/Home';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import AboutMe from './components/about-me/AboutMe';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/About-Me"
              exact
              render={(routerProps) => <AboutMe {...routerProps} />}
            />
            <Route
              path="/Work"
              exact
              render={(routerProps) => <Work {...routerProps} />}
            />
            <Route
              path="/Contact"
              exact
              render={(routerProps) => <Contact {...routerProps} />}
            />
          </Switch>
        </Router>
      </div >
    </>

  );
}

export default App;
