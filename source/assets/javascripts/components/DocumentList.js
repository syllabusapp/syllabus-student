import React, { Component } from "react"
import { Link } from "react-router"

export default class extends Component {
  render() {
    return (
      <main className="content">
        <h3 className="heading heading--s">Files</h3>
        <ul className="has-items">
          <li>
            <Link to="/document" className="item">
              <span className="item-status">
                <img src="/assets/images/icon-warning.svg" />
              </span>
              <h3 className="item-title">Student Agreement</h3>
              <p className="item-description">25 Pages&nbsp;&nbsp;&bull;&nbsp;&nbsp;3MB</p>
            </Link>
          </li>
          <li>
            <Link to="/document" className="item">
              <span className="item-status">
                <img src="/assets/images/icon-warning.svg" />
              </span>
              <h3 className="item-title">Student Agreement</h3>
              <p className="item-description">25 Pages&nbsp;&nbsp;&bull;&nbsp;&nbsp;3MB</p>
            </Link>
          </li>
          <li>
            <Link to="/document" className="item">
              <span className="item-status">
                <img src="/assets/images/icon-warning.svg" />
              </span>
              <h3 className="item-title">Student Agreement</h3>
              <p className="item-description">25 Pages&nbsp;&nbsp;&bull;&nbsp;&nbsp;3MB</p>
            </Link>
          </li>
        </ul>
      </main>
    )
  }
}
