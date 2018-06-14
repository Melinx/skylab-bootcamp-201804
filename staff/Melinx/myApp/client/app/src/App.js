import React, { Component } from 'react';
import { Login, Landing, Register, Account} from '../src/components'
import { Route, Switch } from 'react-router-dom';


class App extends Component {

  onRegister = () => {
    this.setState({ isRegistered: true })
  }

  onLogin = () => {
    this.setState({ isLogged: true })
  }

  render() {
    return (
      <Switch>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register}/>
          <Route path="/account" component={Account}/>
          <Route path="/home" component={Landing} />

        </div>
      </Switch>
    );
  }
}

export default App;


