import CourseNavigation from "./components/CourseNavigation"
import React from "react"
import ReactDOM from "react-dom"

class Index extends React.Component {
  render() {
    return <CourseNavigation />;
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById("app")
)
