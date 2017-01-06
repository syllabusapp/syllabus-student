import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, Link, hashHistory } from "react-router"

import App from "./pages/App.js"
import Course from "./pages/Course.js"
import Dashboard from "./pages/Dashboard.js"

import AssignmentCriticalThought from "./pages/AssignmentCriticalThought"

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="course" component={Course} />
      <Route path="assignment-critical-thought" component={AssignmentCriticalThought} />
    </Route>
  </Router>
  ), document.getElementById("app")
)
