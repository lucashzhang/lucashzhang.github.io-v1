import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';

interface Prop {

}

interface State {

}

interface RepoInfo {
  name: string
  description?: string
}

class App extends Component<Prop, State> {

  async componentDidMount() {
    let username: string = 'lucashzhang';
    let corsAnywhere: string = 'https://cors-anywhere.herokuapp.com/';
    let response: any;
    let repoJson: any[];

    try {
      response = await fetch(corsAnywhere + 'https://api.github.com/users/' + username + '/repos');
      repoJson = await response.json() as any[];
    } catch (error) {
      console.log(error);
      return;
    }

    let repoList: RepoInfo[] = repoJson.map((item: any) => ({ name: item['name'] }));
    console.log(repoList);

    for (let repoNum in repoList) {
      response = await fetch(corsAnywhere + 'https://api.github.com/repos/' + username + '/' + repoList[repoNum].name);
      let contentJson: any = await response.json() as any[];
      repoList[repoNum].description = contentJson['description'];
    }
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
