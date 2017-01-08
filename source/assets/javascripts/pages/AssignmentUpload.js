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
        <div className="cell cell--animate cell--content cell--l">
          <div className="g g--spaceBetween">
            <div className="g-b g-b--6of12">
              <p className="mb025 mt5">Week 1 &bull; Upload Assignment</p>
              <h1 className="heading heading--l">Directions</h1>
              <p>Using Photoshop, take the lessons you learned this week to create a branding system for your local state government. The following elements must be created, combined into a single PDF and uploaded here.</p>
              <ol className="list list--ordered">
                <li>One (1) primary logo and wordmark</li>
                <li>One (2) secondary logo or wordmark</li>
                <li>One (1) business card</li>
                <li>Three (3) branding colors</li>
                <li>One (1) letterhead</li>
              </ol>
            </div>
            <div className="g-b g-b--1of12 g-b--divider"></div>
            <div className="g-b g-b--5of12 mt5">
              <h2 className="heading heading--l">Upload File</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
