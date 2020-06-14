import React, { Component } from 'react'
import { Route , Switch , BrowserRouter } from 'react-router-dom'
import { Home , Login , Register } from './assembly'
 

export default class Router extends Component {
  render() {
    return (
      <div className="router">
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/" component={Register}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
