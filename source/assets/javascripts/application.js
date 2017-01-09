import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, Link, hashHistory } from "react-router"

import App from "./pages/App.js"
import Course from "./pages/Course.js"
import Dashboard from "./pages/Dashboard.js"

import AssignmentCriticalThought from "./pages/AssignmentCriticalThought"
import AssignmentQuestionaire from "./pages/AssignmentQuestionaire"
import AssignmentReadingInline from "./pages/AssignmentReadingInline"
import AssignmentUpload from "./pages/AssignmentUpload"
import AssignmentVideo from "./pages/AssignmentVideo"

ReactDOM.render((
  <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="course" component={Course} />
      <Route path="assignment-critical-thought" component={AssignmentCriticalThought} />
      <Route path="assignment-questionaire" component={AssignmentQuestionaire} />
      <Route path="assignment-reading-inline" component={AssignmentReadingInline} />
      <Route path="assignment-upload" component={AssignmentUpload} />
      <Route path="assignment-video" component={AssignmentVideo} />
    </Route>
  </Router>
  ), document.getElementById("app")
)
