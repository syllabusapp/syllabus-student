import React, { Component } from "react"
import { Link } from "react-router"

import CourseNavigation from "../components/CourseNavigation"
import DashboardSidebar from "../components/DashboardSidebar"
import DocumentList from "../components/DocumentList"

export default class extends Component {
  render() {
    return (
      <div>
        <CourseNavigation />
        <div className="cell cell--animate well well--content">
          <DashboardSidebar />
          <DocumentList />
        </div>
      </div>
    )
  }
}
