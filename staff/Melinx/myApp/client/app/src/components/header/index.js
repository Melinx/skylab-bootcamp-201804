import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {

  // state = {
  //   isLogged: false
  // }

  // isLogged = () => {
  //   console.log('is logged')
  //   return localStorage.getItem("token-app") ? true : false
  // }

  // componentDidMount() {
  //   console.log('didmount')
  //   this.isLogged() ? this.setState({ isLogged: true }) : this.setState({ isLogged: false })
  // }

  _handleLogout = () => {
    localStorage.removeItem("id-app")
    localStorage.removeItem("token-app")
    this.setState({ isLogged: false })
  }

  render() {
    return (
      <header>
        <div>
          <div className="navbar-fixed">
            <nav className="#ef5350 red lighten-2">
              <div className="container hide-on-small-and-down">
                <div className="nav-wrapper">
                  <a className="brand-logo left">els
                    <span className="gerds">Gerds</span>
                  </a>
                  {/* <a data-target="mobile-nav" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                  </a> */}
                  <ul className="right">
                    <li>
                      <a>Home</a>
                    </li>

                    <li>
                      <a href="#todaymenu">On the Menu Today</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>

                    {!this.state.isLogged ?
                      <li> <Link href="#login" to="/login">Login</Link>


                      </li>
                      :
                      <li>
                        <Link to="/" onClick={this._handleLogout}>Logout</Link>
                        <ul id="dropdown1" class="dropdown-content">
                          <li><a href="#!">one</a></li>
                          <li><a href="#!">two</a></li>
                          <li class="divider"></li>
                          <li><a href="#!">three</a></li>
                        </ul>


                      </li>}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <ul className="sidenav" id="mobile-nav">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a href="#account">Account</a>
            </li>
            <li>
              <a href="#todaymenu">On the Menu Today</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header >
    )
  }
}

export default Header