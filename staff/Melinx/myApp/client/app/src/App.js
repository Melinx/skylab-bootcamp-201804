import React, { Component } from 'react';
import { Login, Landing, Header, Register, Account, Order, Todaymenu } from '../src/components'
import { Route, Switch } from 'react-router-dom';

class App extends Component {

  constructor() {
    super()
    this.state = {
      firstCourse: '',
      secondCourse: '',
      orderId: ''
    }
  }

  addCourse = (category, courseId) => {
    if (category === 'firstCourse') {
      this.setState({ firstCourse: courseId })
    }
    if (category === 'secondCourse') {
      this.setState({ secondCourse: courseId })
    }
  }

  // orderNumber = (time, orderId) => {
  //   let d = new Date();
  //   let time = d.getHours();

  //   if (time > 11) {
  //     throw Error('')
  //   }
  //   if (time < 11) {
  //     let orderId = 100
  //     for (let i = 0; i < conf.length; i++)
  //       return i
  //   }
  // }

  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
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

          </Switch>
        </div>
      </div>

    );
  }
}

export default App;