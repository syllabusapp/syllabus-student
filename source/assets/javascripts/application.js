import CourseNavigation from "./components/CourseNavigation"
import React from "react"
import ReactDOM from "react-dom"

class AppFrame extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="cell">
          <CourseNavigation />
          <div className="g g--stretch">
            <aside className="g-b g-b--3of12 g-b--spaceBetween">
              <nav>
                <a href="#">Courses</a>
                <br />
                <a href="#">Documents</a>
              </nav>
              <footer>
                <a href="http://syllabusapp.com">Sign Out</a>
                <br />
                <a href="#">Support</a>
                <br />
                <a href="#">Privacy Policy</a>
              </footer>
            </aside>
            <main className="g-b g-b--9of12">
              <h2 className="heading heading--s">My Current Courses</h2>
              <h2 className="heading heading--s">Upcoming Courses</h2>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <AppFrame />,
  document.getElementById("app")
)
