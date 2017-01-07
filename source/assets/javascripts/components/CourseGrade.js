import React, { Component } from "react"

export default class extends Component {
  constructor(props) {
    super(props)
    this.toggleExpansion = this.toggleExpansion.bind(this)
    this.state = {
      expanded: true
    }
  }
  toggleExpansion() {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }))
  }
  render() {
    return (
      <div className={this.state.expanded ? "card is-expanded" : "card"}>
        <div className="card-header">
          <div className="g">
            <div className="g-b g-b--6of12">
              <h4 className="heading heading--borderless tcw">Current Grade</h4>
              <a onClick={this.toggleExpansion} className="tss">{this.state.expanded ? "Hide Details" : "Show Details"}</a>
            </div>
            <div className="g-b g-b--6of12 tar">
              <h3 className="heading heading--l mb0 tcw twb">98%</h3>
            </div>
          </div>
        </div>
        <div className="card-content">
          <ul>
            <li className="has-definition">
              <dl className="definition">
                <dt>Video &amp; Audio</dt>
                <dd>12 of 13</dd>
              </dl>
            </li>
            <li className="has-definition">
              <dl className="definition">
                <dt>Reading</dt>
                <dd>20 of 20</dd>
              </dl>
            </li>
            <li className="has-definition">
              <dl className="definition">
                <dt>Writing</dt>
                <dd>Average: 97%</dd>
              </dl>
            </li>
            <li className="has-definition">
              <dl className="definition">
                <dt>Uploads</dt>
                <dd>Average: 95%</dd>
              </dl>
            </li>
            <li className="has-definition">
              <dl className="definition">
                <dt>Questionaire</dt>
                <dd>Average: 87%</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
