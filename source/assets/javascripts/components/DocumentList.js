import React, { Component } from "react"
import { Link } from "react-router"

export default class extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <main className="content">
        <h2 className="heading heading--s">Courses</h2>
        <h2 className="heading heading--s">School</h2>
      </main>
    )
  }
}
