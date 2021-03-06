import React, { Component } from "react"
import ReactDOM from "react-dom"

export default class extends Component {
  constructor(props) {
    super(props)
  }
  togglePage(value) {
    this.props.togglePage(value)
  }
  render() {
    return (
      <aside className="sidebar">
        <nav>
          <a onClick={this.togglePage.bind(this, "courses")} className={this.props.currentPage == "courses" ? "anchor is-current" : "anchor"}>
            <span className="anchor-count">3</span>
            Courses
          </a>
          <a onClick={this.togglePage.bind(this, "documents")} className={this.props.currentPage == "documents" ? "anchor is-current is-alert" : "anchor is-alert"}>
            <span className="anchor-count">1</span>
            Documents
          </a>
        </nav>
        <footer className="footer">
          <a href="http://syllabusapp.com">Sign Out</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Support</a>
          <p>All layout and functionality are copyright 2016 by The Syllabus Company, Inc. All logos and branding are copyright 2016 by The Syllabus Company, Inc. but are replaceable for each school's instance..<br/>All rights reserved.</p>
        </footer>
      </aside>
    )
  }
}
