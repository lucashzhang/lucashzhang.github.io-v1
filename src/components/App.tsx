import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';

interface Prop {

}

interface State {
  myAppointments: any[];
  lastIndex: number
  orderBy: string,
  orderDir: string,
  queryText: string,
  formDisplay: boolean

}

class App extends Component<Prop, State> {

  async componentDidMount() {
    let username: string = 'lucashzhang';
    let response: any = await fetch('https://api.github.com/users/' + username + '/repos');
    let json: JSON = await response.json();
    console.log(json)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
