import Logo from "../components/CourseLogo"
import React from "react"

class CourseNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggleChat = this.toggleChat.bind(this)
  }
  toggleChat() {
    this.props.toggleChat()
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
              <h1 className="heading">Courses</h1>
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
      </div>
    );
  }
}

module.exports = CourseNavigation
