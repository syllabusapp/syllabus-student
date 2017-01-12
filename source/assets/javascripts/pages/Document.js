import React, { Component } from "react"
import { Link } from "react-router"
import PDF from "react-pdf-js"

import CourseNavigation from "../components/CourseNavigation"

export default class extends Component {
  render() {
    return (
      <div>
        <CourseNavigation />
        <div className="document">
          <p className="document-title">Sample PDF</p>
          <div className="document-viewer">
            <PDF file="/assets/files/sample-pdf.pdf" />
          </div>
        </div>
      </div>
    )
  }
}
