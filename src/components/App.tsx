import React, { Component } from 'react';
import '../css/App.css';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views'
import TimelinePage from './TimelinePage';

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

  handleChange = (e: any, newNum: number) => {
    this.setState({
      tabNum: newNum
    })
  }

  handleIndexChange = (newNum: number) => {
    this.setState({
      tabNum: newNum
    })
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static" color="primary">
          <Tabs value={this.state.tabNum} onChange={this.handleChange} indicatorColor="secondary" variant="fullWidth">
            <Tab label="Home" {...this.tabProps(1)} />
            <Tab label="Programming" {...this.tabProps(2)} />
            <Tab label="Design" {...this.tabProps(3)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.tabNum}
          onChangeIndex={this.handleIndexChange}
          animateHeight
          enableMouseEvents>
            <div>Home</div>
            <TimelinePage></TimelinePage>
            <div>Designs</div>
        </SwipeableViews>

      </div>
    );
  }
}

export default App;
