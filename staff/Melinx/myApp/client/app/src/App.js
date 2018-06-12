import React, { Component } from 'react';
import { Header, Login, Landing} from '../src/components'
import { Route, Switch } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Switch>
        <div className="App">

          <Route exact path="/" component={Header} />
          <Route exact path="/home" component={Landing} />
          <Route exact path="/" component={Login} />

        </div>
      </Switch>
    );
  }
}

export default App;



{/* <Header isLogged={this.state.isLogged} _handleLogout={this._handleLogout} />
          {!this.isLogged() ?
            <Route path="/login" render={(props) => <Login/>} />
            : null}
          <Route exact path="/" render={() => (
             */}


  // state = {
  //   isLogged: false
  // }

  // isLogged = () => {
  //   return localStorage.getItem("token-app") ? true : false
  // }

  // _handleLogout = () => {
  //   localStorage.removeItem("id-app")
  //   localStorage.removeItem("token-app")
  //   this.setState({ isLogged: false })
  // }

  // componentWillMount(){

  //   this.isLogged() ? this.setState({isLogged:true}):  this.setState({isLogged:false})
  // }

  // componentDidMount() {
  //   this.isLogged 
  // }