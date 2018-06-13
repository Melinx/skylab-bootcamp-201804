import React, { Component } from 'react';
import { Header, Login, Landing, Register} from '../src/components'
import { Route, Switch } from 'react-router-dom';


class App extends Component {

  onRegister = () => {
    console.log('register')

    this.setState({ isLogged: true })
  }


  render() {
    return (
      <Switch>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register}/>
          <Route path="/home" component={Landing} />

        </div>
      </Switch>
    );
  }
}

export default App;


