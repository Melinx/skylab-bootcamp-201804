import React, { Component } from 'react'
import Landing from '../landing'
import logic from '../../logic'
import { withRouter, Link } from 'react-router-dom'
// import swal from 'sweetalert2' 
import './index.css'

class Login extends Component {

    constructor() {
        super()

        this.state = {
            isLogged: '',
            username: '',
            password: ''
        }
    }

    _handleKeepName = e => {
        this.setState({ username: e.target.value })
    }

    _handleKeepPassword = e => {
        this.setState({ password: e.target.value })
    }

    _handleLogin = e => {

        e.preventDefault()

        // logic.login(this.state.username, this.state.password)

        const { username, password } = this.state
        if (username !== "" || password !== "") {

            logic.login(username, password)
                .then(res => {
                    if (res) {
                        this.props.history.push('/')

                    } else {
                        console.log('Error: Username and/or password are wrong')
                    }
                }).catch(err => err.message)
        }

    }

    render() {
        return (
            <section>
         
            <div className="container">
                <div className="row">
                
                    <div className="form center col s6 offset-s3 z-depth-1">
                        <h5 id="title">Log You In</h5>
                        <form onSubmit={this._handleLogin}>
                            <div className="input-field" id="username">
                                <input value={this.state.username} onChange={this._handleKeepName} type="text" className="validate" autoFocus />
                                <label htmlFor="email username">Email username</label>
                            </div>
                            <div className="input-field" id="password">
                                <input value={this.state.password} onChange={this._handleKeepPassword} type="password" className="validate" />
                                <label htmlFor="password">Password</label>
                            </div>
                            <p>
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember" id="checkbox">(Remember me)</label>
                            </p>
                            <div className="login-buttons">

                                <button className="waves-effect pink  waves-light btn" id="loginbtn" type= 'submit' onClick={this.state.isLogged}>Login</button>
                                <a href="#" component={Landing} className="back-btn btn-floating orange  btn-large"> ← </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}

export default withRouter(Login)