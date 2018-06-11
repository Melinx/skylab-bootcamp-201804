import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from '../src/components/header'
import Main from '../src/components/main'
import Footer from '../src/components/footer'
import Login from '../src/components/login'
import { Route } from 'react-router-dom';

import { HashRouter } from 'react-router-dom'

class App extends Component {

  isLogged = () => {
    return localStorage.getItem("token-app") ? true : false
  }
  componentDidMount() {
    this.isLogged 
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header isLogged={this.isLogged()} />

          {!this.isLogged() ?
            <Route path="/login" render={() => (
              <Login />
            )} /> : null}

          <Route exact path="/" render={() => (
            <Main />
          )} />
          <Footer />


        </div>
      </HashRouter>
    );
  }
}

export default App;
