import React, { Component } from "react"
import { Link } from "react-router"

import CourseNavigation from "../components/CourseNavigation"

export default class extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <CourseNavigation />
        <div className="cell cell--content">
          <Link to="/" className="link">
            <img src="/assets/images/icon-chevron-sm.svg" />
            Back to Dashboard
          </Link>
          <h1 className="heading heading--l mb5">Modern Entertainment &amp; Media Communication</h1>
          <div className="g">
            <div className="g-b g-b--8of12">
              <h2 className="heading heading--s">Late Assignments</h2>
              <ul className="has-items">
                <li>
                  <Link to="/" className="item is-urgent">
                    <span className="item-status">
                      <img src="/assets/images/icon-warning.svg" />
                    </span>
                    <h3 className="item-title">Microeconomics 101</h3>
                    <p className="item-description">MIC101&nbsp;&nbsp;&bull;&nbsp;&nbsp;Ends on May 5, 2017</p>
                  </Link>
                </li>
              </ul>
              <h2 className="heading heading--s heading--borderless">Current Assignments</h2>
              <div className="card">
                <span className="heading"><strong>Week 1</strong><span>March 8&ndash;12</span></span>
              </div>
              <ul className="has-items">
                <li>
                  <Link to="/" className="item is-complete">
                    <span className="item-status"></span>
                    <h3 className="item-title">Microeconomics 101</h3>
                    <p className="item-description">MIC101&nbsp;&nbsp;&bull;&nbsp;&nbsp;Ends on May 5, 2017</p>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="item is-complete">
                    <span className="item-status"></span>
                    <h3 className="item-title">Microeconomics 101</h3>
                    <p className="item-description">MIC101&nbsp;&nbsp;&bull;&nbsp;&nbsp;Ends on May 5, 2017</p>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="item">
                    <span className="item-status"></span>
                    <h3 className="item-title">Microeconomics 101</h3>
                    <p className="item-description">MIC101&nbsp;&nbsp;&bull;&nbsp;&nbsp;Ends on May 5, 2017</p>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="item">
                    <span className="item-status"></span>
                    <h3 className="item-title">Microeconomics 101</h3>
                    <p className="item-description">MIC101&nbsp;&nbsp;&bull;&nbsp;&nbsp;Ends on May 5, 2017</p>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="item">
                    <span className="item-status"></span>
                    <h3 className="item-title">Microeconomics 101</h3>
                    <p className="item-description">MIC101&nbsp;&nbsp;&bull;&nbsp;&nbsp;Ends on May 5, 2017</p>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="item">
                    <span className="item-status"></span>
                    <h3 className="item-title">Microeconomics 101</h3>
                    <p className="item-description">MIC101&nbsp;&nbsp;&bull;&nbsp;&nbsp;Ends on May 5, 2017</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="g-b g-b--4of12">
              <h2 className="heading heading--s heading--borderless">Course Details</h2>
              <a href="#" className="anchor anchor--l anchor--red">
                <span className="anchor-count">3</span>
                Announcements
              </a>
              <a href="#" className="anchor anchor--l anchor--orange">
                <span className="anchor-count">2</span>
                Discussions
              </a>
            </div>
          </div>
          <footer className="footer footer--centered">
            <a href="http://syllabusapp.com">Sign Out</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Support</a>
            <p>&copy; 2016 The Syllabus Company, Inc. All rights reserved.</p>
          </footer>
        </div>
      </div>
    )
  }
}
