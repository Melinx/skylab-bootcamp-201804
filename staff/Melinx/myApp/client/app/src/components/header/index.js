import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logic from '../../logic'


class Header extends Component {

  _handleLogout = () => {
    localStorage.removeItem("id-app")
    localStorage.removeItem("token-app")
    this.setState({ isLogged: false })
  }

  // materialize jquery JS || outside

  render() {
    return (

      <header>
        {logic.isLogged() ? <div> </div> : null}

        {logic.isLogged() ? (
          <nav>
            <div className="container">
              <div className="nav-wrapper">
                <a href="#" className="brand-logo left">els
              <span className="gerds">Gerds</span>
                </a>
                <a href="#" data-target="mobile-nav" className="sidenav-trigger">
                  <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-small-and-down">
                  <li>
                  </li><li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#account">Your Account</a>
                  </li>
                  <li>
                    <a href="#todaymenu">On the Menu Today</a>
                  </li>
                  <li>

                    <a class='dropdown-trigger' href='' data-target='dropdown1'>Hola, Pepe!</a>

                      <ul id='dropdown1' class='dropdown-content'>
                      <li><a href="#!">one</a></li>
                      <li><a href="#!">two</a></li>
                      <li class="divider" tabindex="-1"></li>
                      <li><a href="#!">three</a></li>
                      <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                      <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
                    </ul>


                  </li>
                </ul></div></div></nav>
        ) : (

            <nav>
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
                    </li><li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#account">Your Account</a>
                    </li>
                    <li>
                      <a href="#todaymenu">On the Menu Today</a>
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

export default Header