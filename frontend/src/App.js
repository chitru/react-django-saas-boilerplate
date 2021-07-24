import React, { Component } from 'react'
import Root from "./Root"
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Login from "./components/Login"
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'

class App extends Component {
  render() {
    return (
      <>
        <Root>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="*">404</Route>
          </Switch>
        </Root>
      </>
    )
}
}

export default App