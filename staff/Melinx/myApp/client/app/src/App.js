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
    if (category === 'firstCourse') {
      this.setState({ firstCourse: courseId })
    }
    if (category === 'secondCourse') {
      this.setState({ secondCourse: courseId })
    }

    /* this.setState({ [category] : courseId }) // [] links string argument directly to object property from state */
  }


  render() {
    
    return (
      <div>
        <Header />
        <div className="App">
          <Switch>
            <Route path="/landing" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/account" component={Account} />
            <Route path="/todaymenu" render={(props) => (
              <Todaymenu
                history={props.history}
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

          </Switch>
        </div>
      </div>

    );
  }
}

export default App;