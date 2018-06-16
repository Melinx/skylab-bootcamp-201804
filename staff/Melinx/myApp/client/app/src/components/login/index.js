import React, { Component } from 'react'
import Register from '../register'
import logic from '../../logic'
import Alert from 'react-s-alert'
import { Link } from 'react-router-dom'
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

    handleKeepName = e => {
        this.setState({ username: e.target.value })
    }

    handleKeepPassword = e => {
        this.setState({ password: e.target.value })
    }

    handleLogin = e => {

        e.preventDefault()

        const { username, password } = this.state
        if (username !== "" || password !== "") {

            logic.login(username, password)
                .then(res => {
                    if (res) {
                        this.props.history.push('/todaymenu')
                    }
                })
                .catch(({ message }) => {
                    Alert.warning(':|  Wrong credentials  :| ', {
                        position: 'top-right',
                        timeout: 1000
                    })
                })
            // this.props.onLoginError(message)

        }
    }

    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="form center col s6 offset-s3 z-depth-1">
                            <h5 id="title">Log You In</h5>
                            <form onSubmit={this.handleLogin}
                                button
                            >
                                <div className="input-field" id="username">
                                    <input value={this.state.username} onChange={this.handleKeepName} type="text" className="validate" autoFocus />
                                    <label htmlFor="email username">Email username</label>
                                </div>
                                <div className="input-field" id="password">
                                    <input value={this.state.password} onChange={this.handleKeepPassword} type="password" className="validate" />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <p>
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember" id="checkbox">(Remember me)</label>
                                </p>
                                <br />

                                <Alert effect='bouncyflip' offset={150} />

                                <a href="#/register" className="left register-q"> Are you new? Register here</a >
                                <br />
                                <br />
                                <div className="login-buttons">
                                    <button className="waves-effect pink  waves-light btn" id="loginbtn" type='submit'>Login →</button>
                                </div>
                                <br />

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login