import React, { Component } from "react"

export default class extends Component {
  constructor(props) {
    super(props)
  }
  togglePage(value) {
    this.props.togglePage(value)
  }
  render() {
    return (
      <main className="content">
        <h2 className="heading heading--s">Courses</h2>
        <div className="g">
          <div className="g-b g-b--4of12">
            <a onClick={this.togglePage.bind(this, "document-list")} className="card card--document">
              <div className="card-content">
                <img src="/assets/images/icon-folder.svg" />
              </div>
              <div className="card-footer">
                <p>Macroeconomics & Microeconomics</p>
                <small>12 Files</small>
              </div>
            </a>
          </div>
          <div className="g-b g-b--4of12">
            <a onClick={this.togglePage.bind(this, "document-list")} className="card card--document">
              <div className="card-content">
                <img src="/assets/images/icon-folder.svg" />
              </div>
              <div className="card-footer">
                <p>Macroeconomics & Microeconomics</p>
                <small>12 Files</small>
              </div>
            </a>
          </div>
          <div className="g-b g-b--4of12">
            <a onClick={this.togglePage.bind(this, "document-list")} className="card card--document">
              <div className="card-content">
                <img src="/assets/images/icon-folder.svg" />
              </div>
              <div className="card-footer">
                <p>Macroeconomics & Microeconomics</p>
                <small>12 Files</small>
              </div>
            </a>
          </div>
          <div className="g-b g-b--4of12">
            <a onClick={this.togglePage.bind(this, "document-list")} className="card card--document">
              <div className="card-content">
                <img src="/assets/images/icon-folder-warning.svg" />
              </div>
              <div className="card-footer">
                <p>Macroeconomics & Microeconomics</p>
                <small>12 Files</small>
              </div>
            </a>
          </div>
          <div className="g-b g-b--4of12">
            <a onClick={this.togglePage.bind(this, "document-list")} className="card card--document">
              <div className="card-content">
                <img src="/assets/images/icon-folder.svg" />
              </div>
              <div className="card-footer">
                <p>Macroeconomics & Microeconomics</p>
                <small>12 Files</small>
              </div>
            </a>
          </div>
        </div>
        <div className="well well--l">
          <h2 className="heading heading--s">School</h2>
          <div className="g">
            <div className="g-b g-b--4of12">
              <a onClick={this.togglePage.bind(this, "document-list")} className="card card--document">
                <div className="card-content">
                  <img src="/assets/images/icon-folder.svg" />
                </div>
                <div className="card-footer">
                  <p>Macroeconomics & Microeconomics</p>
                  <small>12 Files</small>
                </div>
              </a>
            </div>
            <div className="g-b g-b--4of12">
              <a onClick={this.togglePage.bind(this, "document-list")} className="card card--document">
                <div className="card-content">
                  <img src="/assets/images/icon-folder-warning.svg" />
                </div>
                <div className="card-footer">
                  <p>Macroeconomics & Microeconomics</p>
                  <small>12 Files</small>
                </div>
              </a>
            </div>
            <div className="g-b g-b--4of12">
              <a onClick={this.togglePage.bind(this, "document-list")} className="card card--document">
                <div className="card-content">
                  <img src="/assets/images/icon-folder.svg" />
                </div>
                <div className="card-footer">
                  <p>Macroeconomics & Microeconomics</p>
                  <small>12 Files</small>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
