import React, { Component } from 'react';
import '../css/App.css';
import TimelinePage from './TimelinePage';

interface Prop {

}

interface State {

}

class App extends Component<Prop, State> {

  render() {
    return (
      <div className="App">
        <TimelinePage />
      </div>
    );
  }
}

export default App;
