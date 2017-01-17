import React, { Component } from "react"
import { Link } from "react-router"

import CourseChat from "../components/CourseChat"
import CourseGrade from "../components/CourseGrade"
import CourseNavigation from "../components/CourseNavigation"

class LateAssignment extends Component {
  render() {
    return (
      <div>
        <h2 className="heading heading--s">Late Assignments</h2>
        <ul className="has-items">
          <li>
            <Link to="/assignment-critical-thought" className="item is-urgent">
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
      </div>
    )
  }
}

export default class extends Component {
  constructor(props) {
    super(props);
    this.toggleChat = this.toggleChat.bind(this)
    this.state = {
      chat: false
    }
  }
  toggleChat() {
    if (document.body.classList.contains("oh")) {
      console.log("remove class")
      document.body.classList = ""
    } else {
      console.log("add class")
      document.body.classList = "oh"
    }
    this.setState(prevState => ({
      chat: !prevState.chat
    }))
  }
  render() {
    return (
      <div>
        <CourseNavigation />
        <div className="cell cell--animate well well--content">
          <Link to="/" className="link">
            <img src="/assets/images/icon-chevron-sm.svg" />
            Back to Dashboard
          </Link>
          <h1 className="heading heading--l mb5">Introduction to Syllabus<small>IS101</small></h1>
          <div className="g">
            <div className="g-b g-b--8of12">
              <h2 className="heading heading--s heading--borderless">Current Assignments</h2>
              <div className="card card--row">
                <a href="#" className="button button--circle is-disabled"><img src="/assets/images/icon-arrow-left.svg" /></a>
                <span className="heading"><strong>Week 1</strong><span>March 8&ndash;12</span></span>
                <a href="#" className="button button--circle"><img src="/assets/images/icon-arrow-right.svg" /></a>
              </div>
              <ul className="has-items">
                <li>
                  <Link to="/assignment-reading-inline" className="item is-complete">
                    <span className="item-status"></span>
                    <h3 className="item-title">Reading</h3>
                    <p className="item-description">
                      <strong>Subject:</strong> Completing Coursework in Syllabus
                      <strong>Length:</strong> 5 Paragraphs
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/assignment-video" className="item is-complete">
                    <span className="item-status"></span>
                    <h3 className="item-title">Video</h3>
                    <p className="item-description">
                      <strong>Subject:</strong> Sample Video
                      <strong>Length:</strong> 10s
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/assignment-critical-thought" className="item">
                    <span className="item-status"></span>
                    <h3 className="item-title">Critical Thought</h3>
                    <p className="item-description">
                      <strong>Subject:</strong> Writing papers and responses in Syllabus.
                      <strong>Length:</strong> 2 paragraphs
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/assignment-upload" className="item">
                    <span className="item-status"></span>
                    <h3 className="item-title">Upload</h3>
                    <p className="item-description">
                      <strong>Subject:</strong> Sample Upload
                      <strong>Type:</strong> Any file type
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/assignment-questionaire" className="item">
                    <span className="item-status"></span>
                    <h3 className="item-title">Questionaire</h3>
                    <p className="item-description">
                      <strong>Length:</strong> 7 questions
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="g-b g-b--4of12">
              <h2 className="heading heading--s heading--borderless">Course Details</h2>
              <a onClick={this.toggleChat} className="anchor anchor--l anchor--red">
                <span className="anchor-count">3</span>
                Announcements
              </a>
              <a onClick={this.toggleChat} className="anchor anchor--l anchor--orange">
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
        {this.state.chat ? <CourseChat toggleChat={this.toggleChat} /> : null}
      </div>
    )
  }
}
