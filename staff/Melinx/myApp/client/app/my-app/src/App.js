import React, { Component } from 'react';
import logo from './logo.svg';
import Header from '../src/components/header/Header'
import Main from '../src/components/main/Main'
import Footer from '../src/components/footer'

import { HashRouter } from 'react-router-dom'

class App extends Component {

  
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
