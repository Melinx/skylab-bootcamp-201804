
import React, { Component } from 'react'

function Header(){

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
                      <a href="#home">Home</a>
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
              </div>
            </nav>
          </div>
          <ul className="sidenav" id="mobile-nav">
            <li>
              <a href="#home">Home</a>
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
      </header>
    )
}

export default Header