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
          <h1 className="heading heading--l mb1">Clickable things!</h1>
          <p>Welcome to the prototype of the Syllabus platform! Here are a few things you might like to know before diving in:</p>
          <ul className="mb2">
            <li className="card card--outline">This demo covers the main features of the <strong>student</strong> platform.</li>
            <li className="card card--outline">All content is static. To start over, simply refresh your browser.</li>
            <li className="card card--outline">Branding can be replaced with your school's logo.</li>
            <li className="card card--outline">Desktop only, but don't worry! Mobile is coming soon.</li>
          </ul>
          <a onClick={this.hideWelcome} className="button button--l">Let's go!</a>
        </div>
      </div>
    )
  }
}
