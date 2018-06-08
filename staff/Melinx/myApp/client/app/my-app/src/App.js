import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header'
import Main from '../src/components/Main'

//import Main from '../src/components/Main'
//import Footer from '../src/components/Footer'
import { HashRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Main />
        </div>
      </HashRouter>
    );
  }
}

export default App;
