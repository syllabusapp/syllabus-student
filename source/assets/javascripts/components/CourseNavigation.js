import React, { Component } from "react"

import Breadcrumbs from "../components/Breadcrumbs"
import CourseChat from "../components/CourseChat"
import Logo from "../components/CourseLogo"

export default class extends Component {
  constructor(props) {
    super(props);
    this.toggleChat = this.toggleChat.bind(this)
    this.togglePage = this.togglePage.bind(this)
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
  togglePage(value) {
    this.props.togglePage(value)
  }
  render() {
    return (
      <div className="header">
        <div className="cell">
          <div className="g g--center header-grid">
            <div className="g-b g-b--3of12">
              <Logo />
            </div>
            <div className="header-items g-b g-b--9of12">
              <Breadcrumbs page={this.props.page} togglePage={this.togglePage} />
              <nav>
                <a onClick={this.toggleChat} className="button button--heading"><span>3</span> Messages</a>
                <a href="#" className="button button--heading button--outline">
                  <img src="https://unsplash.it/50/50" />
                  My Account
                </a>
              </nav>
            </div>
          </div>
        </div>
        {this.state.chat ? <CourseChat toggleChat={this.toggleChat} /> : null}
      </div>
    );
  }
}
