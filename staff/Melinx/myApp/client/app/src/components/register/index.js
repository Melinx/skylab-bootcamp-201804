import React from 'react'
import logic from '../../logic'
import './index.css'

class Register extends Component {

    constructor() {
        super()

        this.state = {
            isLogged: '',
            username: '',
            password: ''
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
                                <div>
                                    <a href="#" component={Landing} className="back-btn btn-floating orange  btn-large"> ← </a>
                                    <button className="waves-effect pink  waves-light btn" id="loginbtn" type='submit' onClick={this.state.isLogged}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Register