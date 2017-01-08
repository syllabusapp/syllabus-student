import React, { Component } from "react"
import { Link } from "react-router"

import AssignmentNavigation from "../components/AssignmentNavigation"

export default class extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <AssignmentNavigation />
        <main className="cell cell--animate cell--l well well--content tac">
          <p className="mb025 mt5">Week 1 &bull; Video Assignment</p>
          <h1 className="heading heading--l">Macroeconomics vs. Microeconomics</h1>
          <div className="video">
            <iframe src="https://player.vimeo.com/video/87110435?title=0&byline=0&portrait=0" width="1200" height="675" frameBorder="0"></iframe>
          </div>
        </main>
      </div>
    )
  }
}
