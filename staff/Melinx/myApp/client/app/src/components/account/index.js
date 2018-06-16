import React, { Component } from 'react'
import Landing from '../landing'
import { Link, withRouter } from 'react-router-dom'

import logic from '../../logic'
import './index.css'

class Account extends Component {

    constructor() {
        super()
        this.state = {
            user: []
        }
    }

    componentDidMount() {

        if (sessionStorage.getItem('token')) {
            logic.retrieveUser()
                .then(user => {
                    this.setState({ user })
                })
        }
    }

    handleUpdate = (e) => {
        e.preventDefault()

        const { name, lastName, email, password, confirmPassword } = this.state
        if (password === confirmPassword) {
            if (name !== "" || lastName !== "" || email !== "" || password !== "") {

                logic.updateEater(name, lastName, email, password)
                    .then(res => {
                        console.log(res);
                        if (res) {
                            this.props.history.push('/')
                        } else {
                            console.log('Error, username and/or password wrong')
                        }
                    })
                    .catch(err => console.error(err.message))
            }
        }
    }


    handleName = (e) => {
        this.setState({ name: e.target.value })
    }

    handleLastName = (e) => {
        this.setState({ lastName: e.target.value })
    }

    handleEmail = (e) => {
        this.setState({ email: e.target.value })
    }



    handlePassword = (e) => {
        this.setState({ password: e.target.value })
    }

    handleConfirmPassword = (e) => {
        this.setState({ confirmPassword: e.target.value })
    }

    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="form center col s6 offset-s3 z-depth-1">
                            <h5 id="title">Update or Add Info about You</h5>
                            <form onSubmit={this.haleUpdatend} button>

                                <div className="input-field" id="name">
                                    <input value={this.state.name} onChange={this.handleName} type="text" className="validate" autoFocus />
                                    <label htmlFor="username">
                                        Name</label>
                                </div>

                                <div className="input-field" id="lastName">
                                    <input value={this.state.lastName} onChange={this.handleLastName} type="text" className="validate" />
                                    <label htmlFor="lastName">
                                        Last name</label>
                                </div>

                                <div className="input-field" id="lastName">
                                    <input value={this.state.email} onChange={this.handleEmail} type="email" />
                                    <label htmlFor="lastName">
                                        Email</label>
                                </div>

                                <div className="input-field" id="password">
                                    <input value={this.state.password} onChange={this.handlePassword} type="Password" className="validate" />
                                    <label htmlFor="password">
                                        Password</label>
                                </div>

                                <div className="input-field" id="password">
                                    <input value={this.state.confirmPassword} onChange={this.handleConfirmPassword} type="password" className="validate" />
                                    <label htmlFor="password">
                                        Repeat password</label>
                                </div>

                              
                                <div className="login-buttons">
                                    <button className="waves-effect pink  waves-light btn" id="loginbtn" type='submit'>Update →</button>
                                    <br/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withRouter(Account)