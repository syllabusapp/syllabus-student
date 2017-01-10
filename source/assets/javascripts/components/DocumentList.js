import React, { Component } from "react"
import { Link } from "react-router"

export default class extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <main className="content">
        <h2 className="heading heading--s">Courses</h2>
        <div className="g">
          <div className="g-b g-b--4of12">
            <Link to="/document" className="card card--document">
              <div className="card-content">
                <img src="/assets/images/icon-folder.svg" />
              </div>
              <div className="card-footer">
                <p>Macroeconomics & Microeconomics</p>
                <small>12 Files</small>
              </div>
            </Link>
          </div>
          <div className="g-b g-b--4of12">
            <Link to="/document" className="card card--document">
              <div className="card-content">
                <img src="/assets/images/icon-folder.svg" />
              </div>
              <div className="card-footer">
                <p>Macroeconomics & Microeconomics</p>
                <small>12 Files</small>
              </div>
            </Link>
          </div>
          <div className="g-b g-b--4of12">
            <Link to="/document" className="card card--document">
              <div className="card-content">
                <img src="/assets/images/icon-folder.svg" />
              </div>
              <div className="card-footer">
                <p>Macroeconomics & Microeconomics</p>
                <small>12 Files</small>
              </div>
            </Link>
          </div>
          <div className="g-b g-b--4of12">
            <Link to="/document" className="card card--document">
              <div className="card-content">
                <img src="/assets/images/icon-folder-warning.svg" />
              </div>
              <div className="card-footer">
                <p>Macroeconomics & Microeconomics</p>
                <small>12 Files</small>
              </div>
            </Link>
          </div>
          <div className="g-b g-b--4of12">
            <Link to="/document" className="card card--document">
              <div className="card-content">
                <img src="/assets/images/icon-folder.svg" />
              </div>
              <div className="card-footer">
                <p>Macroeconomics & Microeconomics</p>
                <small>12 Files</small>
              </div>
            </Link>
          </div>
        </div>
        <div className="well well--l">
          <h2 className="heading heading--s">School</h2>
          <div className="g">
            <div className="g-b g-b--4of12">
              <Link to="/document" className="card card--document">
                <div className="card-content">
                  <img src="/assets/images/icon-folder.svg" />
                </div>
                <div className="card-footer">
                  <p>Macroeconomics & Microeconomics</p>
                  <small>12 Files</small>
                </div>
              </Link>
            </div>
            <div className="g-b g-b--4of12">
              <Link to="/document" className="card card--document">
                <div className="card-content">
                  <img src="/assets/images/icon-folder-warning.svg" />
                </div>
                <div className="card-footer">
                  <p>Macroeconomics & Microeconomics</p>
                  <small>12 Files</small>
                </div>
              </Link>
            </div>
            <div className="g-b g-b--4of12">
              <Link to="/document" className="card card--document">
                <div className="card-content">
                  <img src="/assets/images/icon-folder.svg" />
                </div>
                <div className="card-footer">
                  <p>Macroeconomics & Microeconomics</p>
                  <small>12 Files</small>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
