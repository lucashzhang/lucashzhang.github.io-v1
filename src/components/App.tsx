import React, { Component } from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import '../css/App.css';
import HomePage from './HomePage';
import TimelinePage from './TimelinePage';
import DesignPage from './DesignPage';
import NavBar from './NavBar'


interface Prop {

}

interface State {
  tabNum: any
}

class App extends Component<Prop, State> {

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route component={NavBar} />
          <Switch>
            <Route path="/programming" component={TimelinePage} />
            <Route path="/design" componenet={DesignPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </HashRouter>
        <div id="background"></div>
      </div>
    );
  }
}

export default App;
