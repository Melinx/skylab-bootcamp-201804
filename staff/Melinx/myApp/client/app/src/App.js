import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from '../src/components/header'
import Main from '../src/components/main'
import Footer from '../src/components/footer'
import Login from '../src/components/login'
import { Route } from 'react-router-dom';

import { HashRouter } from 'react-router-dom'

class App extends Component {
  state = {
    isLogged: false
  }

  isLogged = () => {
    return localStorage.getItem("token-app") ? true : false
  }

  _handleLogout = () => {
    localStorage.removeItem("id-app")
    localStorage.removeItem("token-app")
    this.setState({ isLogged: false })
  }

  componentWillMount(){

    this.isLogged() ? this.setState({isLogged:true}):  this.setState({isLogged:false})
  }
  
  // componentDidMount() {
  //   this.isLogged 
  // }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header isLogged={this.state.isLogged} _handleLogout={this._handleLogout} />
          {!this.isLogged() ?
            <Route path="/login" render={(props) => <Login isLogged={this.isLogged}/>} />
        
            : null}

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
