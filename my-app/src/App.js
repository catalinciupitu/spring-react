import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      isLoading: false
    };
  }

  render() {

    const {beers, isLoading} = this.state;

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
                <h2>Beer List</h2>
                {beers.map((beer: any) =>
                  <div key={beer.id}>
                    {beer.name}
                  </div>
                )}
              </div>

      </div>
    );
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('http://localhost:8080/beers')
      .then(response => response.json())
      .then(data => this.setState({beers: data, isLoading: false}))
      .catch(error => console.log(error));
  }
}

export default App;
