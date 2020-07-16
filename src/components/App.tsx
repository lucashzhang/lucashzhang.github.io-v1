import React, { Component } from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import ReactGA from 'react-ga';
import '../css/App.css';
import HomePage from './HomePage/HomePage';
import TimelinePage from './TimelinePage/TimelinePage';
import FunPage from './FunPage/FunPage';
import NavBar from './NavBar';

interface Prop {
}

interface State {
}

class App extends Component<Prop, State> {

  componentDidMount = () => {
    // Google Analytics
    console.log('initializing')
    ReactGA.initialize('UA-172850727-1');
    ReactGA.pageview(window.location.pathname + window.location.search)
    // I hope y'all aren't using an adblock, but oh well, I can't really blame anyone for using one.
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route component={NavBar} />
          <Switch>
            <Route path="/fun" component={FunPage} />
            <Route path="/programming" component={TimelinePage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </HashRouter>
        <div id="background"></div>
      </div>
    );
  }
}

export default App;
