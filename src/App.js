import React, { Component } from 'react';
// import Intro from './components/Intro';
// import Series from './containers/Series';
// import logo from './logo.svg';
import Main from './components/Main';
import 'whatwg-fetch';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to TV Series list</h1>
        </header>
        {/* <Intro message="Here you can find all of the series" /> */}
        <Main />
      </div>
    );
  }
}

export default App;
