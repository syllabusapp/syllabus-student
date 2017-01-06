import React, { Component } from "react"
import { Link } from "react-router"

import Logo from "../components/CourseLogo"

export default class extends Component {
  constructor(props) {
    super(props);
    this.toggleChat = this.toggleChat.bind(this)
    this.state = {
      chat: false
    }
  }
  toggleChat() {
    this.setState(prevState => ({
      chat: !prevState.chat
    }))
  }
  render() {
    return (
      <div className="header">
        <div className="cell cell--animate">
          <div className="g g--center header-grid">
            <div className="g-b g-b--4of12">
              <Link to="/course" className="link">
                <img src="/assets/images/icon-chevron-sm.svg" />
                Back to course
              </Link>
            </div>
            <div className="g-b g-b--4of12 tac">
              <Logo centered />
            </div>
            <nav className="header-items g-b g-b--4of12">
              <Link to="/course" className="button button--green">Complete &amp; Continue</Link>
            </nav>
          </div>
        </div>
        {this.state.chat ? <CourseChat toggleChat={this.toggleChat} /> : null}
      </div>
    );
  }
}
