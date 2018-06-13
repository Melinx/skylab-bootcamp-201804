import React, { Component } from 'react'
import Register from '../register'
import { Link, withRouter } from 'react-router-dom'
import logic from '../../logic'
import './header.css'


class Header extends Component {

  _handleLogout = (props) => {
    if(logic.logout() === true){
      this.props.history.push('/home')
    } 
  }

  state = {
    isLogged: '',
  }

  render() {
    return (
      <header>
        {logic.isLogged() ? (
          <nav>
            <div className="container">
              <div className="nav-wrapper">
                <a href="#" className="brand-logo left">els
              <span className="gerds">Gerds</span>
                </a>
                <ul className="right hide-on-small-and-down">
                  <li>
                  </li><li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#todaymenu">On the Menu Today</a>
                  </li>
                  <li>
                    <a href="#account">Your Account</a>
                  </li>
                  <li>
                  <a href='#' onClick={this._handleLogout} >Logout</a>
                  </li>

                  <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn">Hola, Pepe!</a>
                    <div className="dropdown-content">
                      <a href="#/home">Account info</a>
                      <a href="#">My orders</a>
                      <a href="#">Logout</a>
                    </div>
                  </li>
                </ul></div></div></nav>
        ) : (
            <nav>
              <div className="container">
                <div className="nav-wrapper">
                  <a href="#" className="brand-logo left">els
                  <span className="gerds">Gerds</span>
                  </a>

                  <ul className="right hide-on-small-and-down">
                    <li>
                    </li><li>
                      <a href="#home">Home</a>
                    </li>

                    <li>
                      <a href="#todaymenu">On the Menu Today</a>
                    </li>

                    <li>
                    <a href="#register">Register</a>
                    </li>

                    <li>
                      <a href="#login">Login</a>
                    </li>
                  </ul></div></div></nav>
          )}

      </header >
    )
  }
}

export default withRouter(Header)