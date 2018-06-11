
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from '../login'
// import Logout from './Logout'


function _handleLogout() {
  localStorage.removeItem("id-app")
  localStorage.removeItem("token-app")
}

function Header() {

  // isLogged = () => {
  //   return localStorage.getItem("token-app") ? true : false
  // }
  return (
    <header>
      <div>
        <div className="navbar-fixed">
          <nav className="#ef5350 red lighten-2">
            <div className="container">
              <div className="nav-wrapper">
                <a href="#" className="brand-logo">els
                    <span className="gerds">Gerds</span>
                </a>
                <a href="#" data-target="mobile-nav" className="sidenav-trigger">
                  <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  {/* {
                    !this.isLogged ? */}
                      <li> <Link href="#login" to="/login">Login</Link>
                      </li>
                      {/* :
                      // this should appear in the lOGIN window: <li> <Link href="#account" to="/register">Register</Link></li>
                      <li> <Link href="#account" to="/account">Logout</Link>
                      </li>
                  } */}
                  <li>
                    <a href="#todaymenu">On the Menu Today</a>
                  </li>
                  <li>
                    <a href="#weekmenu">Plan your Week</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <ul className="sidenav" id="mobile-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#account">Account</a>
          </li>
          <li>
            <a href="#todaymenu">On the Menu Today</a>
          </li>
          <li>
            <a href="#weekmenu">Plan your Week</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header >
  )
}

export default Header