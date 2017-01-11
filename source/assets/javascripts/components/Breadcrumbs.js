import React, { Component } from "react"
import { Link } from "react-router"

export default class extends Component {
  constructor(props) {
    super(props);
    this.togglePage = this.togglePage.bind(this)
  }
  togglePage(value) {
    this.props.togglePage(value)
  }
  render() {
    console.log(this.props.page);
    if (this.props.page == "courses" || this.props.page == "documents") {
      return (
        <ol className="breadcrumbs">
          <li>
            <h3 className="heading">{
              this.props.page == "courses" ? "Courses" :
              this.props.page == "documents" ? "Documents" :
              null
            }</h3>
          </li>
        </ol>
      )
    } else if (this.props.page == "document-list") {
      return (
        <ol className="breadcrumbs">
          <li className="breadcrumbs-link">
            <a onClick={this.togglePage.bind(this, "documents")} className="heading heading--link">
              <span className="breadcrumbs-return"></span>
              Documents
            </a>
          </li>
          <li>
            <h3 className="heading">Sample Folder</h3>
          </li>
        </ol>
      )
    } else {
      return <p></p>
    }
  }
}
