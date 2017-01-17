import React, { Component } from "react"
import { Link } from "react-router"

import AssignmentNavigation from "../components/AssignmentNavigation"

export default class extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <AssignmentNavigation />
        <div className="cell cell--animate cell--l well well--centered well--content">
          <div className="g g--center g--spaceBetween well-content">
            <div className="g-b g-b--6of12">
              <p className="mb025 mt5">Week 1 &bull; Upload Assignment</p>
              <h1 className="heading heading--l">Directions</h1>
              <p>This is a sample upload assignment. Though this prototype upload doesn't actually work, you can still see the ease and powerful simplicity of Syllabus.</p>
              <ol className="list list--ordered">
                <li>Instant access to assignment directions.</li>
                <li>Easy and secure uploading of Word, Excel, Photoshop, Illustrator, Video, and many other file types.</li>
                <li>Great for larger and open-ended assignments.</li>
              </ol>
            </div>
            <div className="g-b g-b--1of12 g-b--divider"></div>
            <div className="g-b g-b--5of12 mt5">
              <h2 className="heading heading--l">Upload File</h2>
              <p><span className="label">Reminder</span> Please upload a PDF document that does not exceed 8mb in&nbsp;size.</p>
              <div className="card card--outline card--upload">
                <Link to="/assignment-upload">Click or drag-n-drop here to upload</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
