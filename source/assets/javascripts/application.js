import CourseNavigation from "./components/CourseNavigation"
import React from "react"
import ReactDOM from "react-dom"

class AppFrame extends React.Component {
  render() {
    return (
      <div className="row">
        <CourseNavigation />
        <div className="cell cell--content">
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
            </footer>
          </aside>
          <main className="content">
            <h2 className="heading heading--s">My Current Courses</h2>
            <ul className="has-items">
              <li>
                <a href="#" className="item is-urgent">
                  <span className="item-status">4</span>
                  <h3 className="item-title">Microeconomics 101</h3>
                  <p className="item-description">MIC101&nbsp;&nbsp;&bull;&nbsp;&nbsp;Ends on May 5, 2017</p>
                </a>
              </li>
              <li>
                <a href="#" className="item is-caution">
                  <span className="item-status">1</span>
                  <h3 className="item-title">Modern Entertainment &amp; Media Communication</h3>
                  <p className="item-description">MEMC&nbsp;&nbsp;&bull;&nbsp;&nbsp;Ends on May 1, 2017</p>
                </a>
              </li>
              <li>
                <a href="#" className="item is-complete">
                  <span className="item-status">0</span>
                  <h3 className="item-title">Art History</h3>
                  <p className="item-description">ARHI&nbsp;&nbsp;&bull;&nbsp;&nbsp;Ends on July 28, 2017</p>
                </a>
              </li>
            </ul>
            <h2 className="heading heading--s">Upcoming Courses</h2>
            <ul className="has-items">
              <li className="item item--disabled">
                <h3 className="item-title">Macroeconomics &amp; Corporate Finances</h3>
                <p className="item-description">Begins on August 20, 2017</p>
              </li>
            </ul>
          </main>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <AppFrame />,
  document.getElementById("app")
)
