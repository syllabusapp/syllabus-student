import React, { Component } from "react"

export default class extends Component {
  constructor(props) {
    super(props)
    this.hideWelcome = this.hideWelcome.bind(this)
  }
  hideWelcome() {
    this.props.hideWelcome()
  }
  render() {
    return (
      <div className="modal">
        <div className="modal-overlay"></div>
        <div className="modal-content">
          <p className="heading heading--l mb0">🎉</p>
          <h1 className="heading heading--l mb1">Student Demo</h1>
          <p>Welcome to the prototype of the Syllabus platform! Here are a few things you might like to know before diving in:</p>
          <div className="card card--outline mb3">
            <div className="cell cell--s">
              <ul className="list list--underlined">
                <li>This demo covers the main features of the student platform. Teacher and administrator demos coming soon!</li>
                <li>All demo content and interactions are static. To start over, simply refresh your browser.</li>
                <li>The Syllabus University is fictional, and the logo can be replaced with your school's logo.</li>
              </ul>
            </div>
          </div>
          <a onClick={this.hideWelcome} className="button button--l">Let's go!</a>
        </div>
      </div>
    )
  }
}
