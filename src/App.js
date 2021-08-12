import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import MainNavigation from './components/Navigation/MainNavigation';
import Home from './components/Main/Home';
import Projects from './components/Main/Projects';
import Resume from './components/Main/Resume';
import Footer from './components/Footer/Footer';

const App = ()=> {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <div style={{marginTop: '80px'}}>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/projects' exact>
              <Projects />
            </Route>
            <Route path='/resume' exact>
              <Resume />
            </Route>
            <Redirect to="/" exact/>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
