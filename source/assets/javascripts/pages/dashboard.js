import React, { Component } from "react"
import { Link } from "react-router"

import CourseList from "../components/CourseList"
import CourseNavigation from "../components/CourseNavigation"
import DashboardSidebar from "../components/DashboardSidebar"
import DocumentFolders from "../components/DocumentFolders"
import DocumentList from "../components/DocumentList"

export default class extends Component {
  constructor(props) {
    super(props)
    this.togglePage = this.togglePage.bind(this)
    this.state = {
      page: "courses"
    }
  }
  togglePage(value) {
    this.setState({
      page: value
    })
  }
  render() {
    return (
      <div>
        <CourseNavigation page={this.state.page} togglePage={this.togglePage} />
        <div className="cell cell--animate well well--content">
          <DashboardSidebar currentPage={this.state.page} togglePage={this.togglePage} />
          {
            this.state.page == "courses" ? <CourseList /> :
            this.state.page == "documents" ? <DocumentFolders togglePage={this.togglePage} /> :
            null
          }
        </div>
      </div>
    )
  }
}
