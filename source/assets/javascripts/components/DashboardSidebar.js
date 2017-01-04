import React, { Component } from "react"
import ReactDOM from "react-dom"

export default class extends Component {
  render() {
    return (
      <aside className="sidebar">
        <nav>
          <a href="#" className="anchor">
            <span className="anchor-count">3</span>
            Courses
          </a>
          <a href="#" className="anchor is-alert">
            <span className="anchor-count">1</span>
            Documents
          </a>
        </nav>
        <footer className="footer">
          <a href="http://syllabusapp.com">Sign Out</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Support</a>
          <p>&copy; 2016 The Syllabus Company, Inc.<br/>All rights reserved.</p>
        </footer>
      </aside>
    )
  }
}
