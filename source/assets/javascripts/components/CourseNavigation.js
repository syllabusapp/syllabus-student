import React, { Component } from "react"

import CourseChat from "../components/CourseChat"
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
        <div className="cell">
          <div className="g g--center header-grid">
            <div className="g-b g-b--3of12">
              <Logo />
            </div>
            <nav className="header-items g-b g-b--9of12">
              <a onClick={this.toggleChat} className="button button--heading"><span>3</span> Messages</a>
              <a href="#" className="button button--heading button--outline">
                <img src="https://unsplash.it/50/50" />
                My Account
              </a>
            </nav>
          </div>
        </div>
        {this.state.chat ? <CourseChat toggleChat={this.toggleChat} /> : null}
      </div>
    );
  }
}
