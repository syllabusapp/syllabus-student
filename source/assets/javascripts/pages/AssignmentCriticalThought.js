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
        <div className="cell cell--animate cell--content">
          <div className="g g--spaceBetween">
            <div className="g-b g-b--4of12">
              <p className="mb025 mt5">Week 1 &bull; Critical Thought Assignment</p>
              <h1 className="heading heading--l">Directions</h1>
              <p>Please discuss the importance of respecting morals in modern entertainment. Your response must address the following points in <em>at least</em> <strong>5&nbsp;paragraphs</strong>:</p>
              <ol className="list list--ordered">
                <li>What are traditional morals?</li>
                <li>What is modern entertainment?</li>
                <li>Traditional morals vs. modern entertainment</li>
                <li>Traditional morals within modern entertainment</li>
                <li>How modern entertainment affects traditional morals</li>
              </ol>
            </div>
            <div className="g-b g-b--7of12 mt5">
              <h2 className="heading heading--l">My Response</h2>
              <textarea className="editable" placeholder="Begin typing your response here..."></textarea>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
