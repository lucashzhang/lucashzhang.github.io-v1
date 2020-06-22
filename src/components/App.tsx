import React, { Component } from 'react';
import '../css/App.css';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views'
import HomePage from './HomePage';
import TimelinePage from './TimelinePage';
import DesignPage from './DesignPage';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

interface Prop {

}

interface State {
  tabNum: any
}

class App extends Component<Prop, State> {

  constructor(prop: Prop) {
    super(prop);
    this.state = {
      tabNum: 0
    }
  }

  tabProps(index: number) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  handleTabChange = (e: any, newNum: number) => {
    this.setState({
      tabNum: newNum
    })
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  handleSwipeChange = (newNum: number) => {
    this.setState({
      tabNum: newNum
    })
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  componentDidMount = () => {
    console.log('mounting')
  }


  render() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
      <div className="App">
        <Router>
          <AppBar position="sticky" color="default">
            <Tabs value={this.state.tabNum} onChange={this.handleTabChange} textColor="secondary" indicatorColor="secondary" variant="fullWidth">
              <Link to="/"><Tab label="Home" {...this.tabProps(1)} /></Link>
              <Link to="/programming"><Tab label="Programming" {...this.tabProps(2)} /></Link>
              <Link to="/design"><Tab label="Design" {...this.tabProps(3)} /></Link>
            </Tabs>
          </AppBar>
          <Switch>
            <Route path="/programming">
              <TimelinePage></TimelinePage>
            </Route>
            <Route path="/design">
              <DesignPage></DesignPage>
            </Route>
            <Route path="/">
              <HomePage buttonClick={this.handleSwipeChange}></HomePage>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
