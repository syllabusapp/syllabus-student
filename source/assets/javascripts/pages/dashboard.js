import React, { Component } from "react"
import { Link } from "react-router"

import CourseChat from "../components/CourseChat"
import CourseNavigation from "../components/CourseNavigation"
import DashboardSidebar from "../components/DashboardSidebar"

export default class extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <CourseNavigation />
        <div className="cell cell--content">
          <DashboardSidebar />
          <main className="content">
            <h2 className="heading heading--s">My Current Courses</h2>
            <ul className="has-items">
              <li>
                <Link to="/course" className="item is-urgent">
                  <span className="item-status">4</span>
                  <h3 className="item-title">Microeconomics 101</h3>
                  <p className="item-description">MIC101&nbsp;&nbsp;&bull;&nbsp;&nbsp;Ends on May 5, 2017</p>
                </Link>
              </li>
              <li>
                <a href="#" className="item is-caution">
                  <span className="item-status">1</span>
                  <h3 className="item-title">Modern Entertainment &amp; Media Communication</h3>
                  <p className="item-description">MEMC&nbsp;&nbsp;&bull;&nbsp;&nbsp;Ends on May 1, 2017</p>
                </a>
              </li>
              <li>
                <a href="#" className="item is-complete">
                  <span className="item-status"></span>
                  <h3 className="item-title">Art History</h3>
                  <p className="item-description">ARHI&nbsp;&nbsp;&bull;&nbsp;&nbsp;Ends on July 28, 2017</p>
                </a>
              </li>
            </ul>
            <h2 className="heading heading--s">Upcoming Courses</h2>
            <ul className="has-items">
              <li className="item item--disabled">
                <h3 className="item-title">Macroeconomics &amp; Corporate Finances</h3>
                <p className="item-description">Begins on August 20, 2017</p>
              </li>
            </ul>
          </main>
        </div>
      </div>
    )
  }
}
