import React, { Component } from 'react';
import { Header, Login, Landing} from '../src/components'
import { Route, Switch } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Switch>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
        </div>
      </Switch>
    );
  }
}

export default App;


