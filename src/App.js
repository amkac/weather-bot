import React, { Component } from 'react';
import logo from './sun.svg';
import './App.css';
import LexChat from './lexChat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Weather bot</h1>
        </header>
        <p className="App-intro">
          Start chatting with <code>Weather bot</code>
        </p>
        <LexChat botName="TodaysWeather"
                 IdentityPoolId="eu-west-1:1a710635-bc5e-4120-a38e-e81b6fb3122e"
                 placeholder="Enter your text"
                 style={{position: 'absolute'}}
                 backgroundColor="#FFFFFF"
                 height="400px"
                 region="eu-west-1"
                 headerText="Chat with weather bot" />
      </div>
    );
  }
}

export default App;
