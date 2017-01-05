import React, { Component } from "react"
import { Link } from "react-router"

import CourseGrade from "../components/CourseGrade"
import CourseNavigation from "../components/CourseNavigation"

export default class extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <CourseNavigation />
        <div className="cell cell--animated cell--content">
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
                    <h3 className="item-title">Critical Thought</h3>
                    <p className="item-description">
                      <strong>Length:</strong> 5 paragraphs
                      <strong>Subject:</strong> Macroeconomics and Large Corporations
                    </p>
                  </Link>
                </li>
              </ul>
              <h2 className="heading heading--s heading--borderless">Current Assignments</h2>
              <div className="card card--row">
                <a href="#" className="button button--circle is-disabled"><img src="/assets/images/icon-arrow-left.svg" /></a>
                <span className="heading"><strong>Week 1</strong><span>March 8&ndash;12</span></span>
                <a href="#" className="button button--circle"><img src="/assets/images/icon-arrow-right.svg" /></a>
              </div>
              <ul className="has-items">
                <li>
                  <Link to="/" className="item is-complete">
                    <span className="item-status"></span>
                    <h3 className="item-title">Reading</h3>
                    <p className="item-description">
                      <strong>Length:</strong> Chapters 1&ndash;5
                      <strong>Book:</strong> Barron’s AP Microeconomics/Macroeconomics AP, 5th Edition
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="item is-complete">
                    <span className="item-status"></span>
                    <h3 className="item-title">Video</h3>
                    <p className="item-description">
                      <strong>Length:</strong> 23m 5s
                      <strong>Subject:</strong> Microeconomics vs. Macroeconomics
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="item">
                    <span className="item-status"></span>
                    <h3 className="item-title">Critical Thought</h3>
                    <p className="item-description">
                      <strong>Length:</strong> 5 paragraphs
                      <strong>Subject:</strong> Macroeconomics and Large Corporations
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="item">
                    <span className="item-status"></span>
                    <h3 className="item-title">Upload</h3>
                    <p className="item-description">
                      <strong>Type:</strong> PDF or PSD
                      <strong>Subject:</strong> Logo &amp; branding for local government
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="item">
                    <span className="item-status"></span>
                    <h3 className="item-title">Questionaire</h3>
                    <p className="item-description">
                      <strong>Length:</strong> 25 questions
                    </p>
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
              <CourseGrade />
              <h2 className="heading heading--s mb2">Quick Actions</h2>
              <ul>
                <li>
                  <a href="#">Contact teacher</a>
                </li>
                <li>
                  <a href="#">Request extension</a>
                </li>
                <li>
                  <a href="#">Notify as absent</a>
                </li>
              </ul>
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
