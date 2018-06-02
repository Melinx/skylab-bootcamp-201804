import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import logic from './logic'

class App extends Component {

  state = {
    name: '',
    surname: '',
    email: '',
    password: '',
    isLogged: false,
  }

  submit = (e) => {
    e.preventDefault()
    
    logic.registerUser(this.state.name, this.state.surname, this.state.email, this.state.password).then((res)=>{
      console.log(res)
      // .catch(err=> {message})
    })
    // alert(`${this.state.name} ${this.state.surname} ${this.state.email} ${this.state.password}  `)
  }

  handleKeepName = (e) => {
    let name = e.target.value;
    this.setState({ name })
  }

  handleKeepSurname = (e) => {
    let surname = e.target.value;
    this.setState({ surname })
  }

  handleKeepEmail = (e) => {
    const email = e.target.value;
    this.setState({ email })
  }

  handleKeepPassword = (e) => {
    let password = e.target.value;
    this.setState({ password })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Register</h1>
        <form onSubmit={this.submit}>
          <input type="name" name="name" placeholder="name"  value={this.state.name} onChange={this.handleKeepName} />
          <input type="password" name="password" value={this.state.surname} onChange={this.handleKeepSurname} />
          <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleKeepEmail} />
          <input type="password" name="password" value={this.state.password} onChange={this.handleKeepPassword} />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default App;
