import React, { Component } from 'react';
import '../css/App.css';
import { TabGroup, Tab } from 'react-material-tabs';
import TimelinePage from './TimelinePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

interface Prop {

}

interface State {
  tabNum: number
}

class App extends Component<Prop, State> {

  constructor(prop: Prop) {
    super(prop);
    this.state = {
      tabNum: 0
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="Tabs">
            <TabGroup style={{ indicator: { color: '#FF5722' } }}>
              <Link className="Tab" to="/">
                <Tab>Home</Tab>
              </Link>
              <Link className="Tab" to="/repositories">
                <Tab>Repositories</Tab>
              </Link>
              <Link className="Tab" to="/designs">
                <Tab>Designs</Tab>
              </Link>
            </TabGroup>
          </div>
          <Switch>
            <Route path="/repositories">
              <TimelinePage></TimelinePage>
            </Route>
            <Route path="/designs">
              <div>Designs</div>
            </Route>
            <Route path="/">
              <div>Home</div>
            </Route>
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
