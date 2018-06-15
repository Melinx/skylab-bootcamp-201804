import React, { Component } from 'react';
import { Login, Landing, Header, Register, Account, Order, Todaymenu } from '../src/components'
import { Route, Switch } from 'react-router-dom';

class App extends Component {

  constructor() {
    super()
    this.state = {
      isRegistered: false,
      isLogged: true,
      firstCourse: '',
      secondCourse: ''
    }
  }
  onRegister = () => {
    this.setState({ isRegistered: true })
  }

  onLogin = () => {
    this.setState({ isLogged: true })
  }

  addCourse = (category, courseId) => {
    this.setState({
      [category]: courseId
    })
  }


  render() {
    return (
      <div>
      <Header />
      <Switch>
        <div className="App">
          <Route path="/landing" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/account" component={Account} />
          <Route path="/todaymenu" render={() => (
            <Todaymenu
              addCourse={this.addCourse}
              firstCourse={this.state.firstCourse}
              secondCourse={this.state.secondCourse}
              onClick={this.onClick}
            />
          )} />
          <Route path="/order" render={() => (
            <Order
              firstCourse={this.state.firstCourse}
              secondCourse={this.state.secondCourse}
            />
          )} />
          {/* <Route path="/todaymenu" component={Todaymenu} /> */}

        </div>
      </Switch>
      </div>

    );
  }
}

export default App;