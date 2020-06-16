import React, { Component } from 'react';
import '../css/App.css';
import Timeline from './Timeline';

interface Prop {

}

interface State {

}

class App extends Component<Prop, State> {

  render() {
    return (
      <div className="App">
        <Timeline />
      </div>
    );
  }
}

export default App;
