import Logo from "../components/CourseLogo"
import React from "react"

class CourseNavigation extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="cell well">
          <div className="g">
            <div className="g-b g-b--3of12">
              <Logo />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

module.exports = CourseNavigation
