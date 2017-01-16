import React, { Component } from "react"
import { Link } from "react-router"

export default class extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <main className="content">
        <h2 className="heading heading--s">My Current Courses</h2>
        <ul className="has-items">
          <li>
            <Link to="/course" className="item is-caution">
              <span className="item-status">3</span>
              <h3 className="item-title">Introduction to Syllabus</h3>
              <p className="item-description"><strong>Code:</strong> IS101 <strong>Ends on:</strong> November 28, 2018</p>
            </Link>
          </li>
          <li>
            <Link to="/course" className="item is-complete">
              <span className="item-status"></span>
              <h3 className="item-title">Sample Course</h3>
              <p className="item-description"><strong>Code:</strong> SC101 <strong>Ends on:</strong> November 28, 2018</p>
            </Link>
          </li>
        </ul>
        <h2 className="heading heading--s">Upcoming Courses</h2>
        <ul className="has-items">
          <li className="item item--disabled">
            <h3 className="item-title">Expanding Online Learning</h3>
            <p className="item-description">Begins on August 20, 2017</p>
          </li>
        </ul>
      </main>
    )
  }
}
