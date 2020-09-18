import React from 'react';

import './App.css';
import NavBarComponent from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/pages/HomePage/home.page';
import Tests from '../src/pages/TestsPage/tests.page';
import Results from '../src/pages/ResultsPage/results.page';
import Test from '../src/components/test/test';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <NavBarComponent />
        </header>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/tests' component={Tests} />
            <Route path='/test/:id' component={Test} />
            <Route exact path='/results' component={Results} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
