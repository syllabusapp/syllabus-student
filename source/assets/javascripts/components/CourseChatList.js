import React, { Component } from "react"
import ReactDOM from "react-dom"

export default class extends Component {
  constructor(props) {
    super(props)
  }
  toggleMessages(value) {
    this.props.toggleMessages(value)
  }
  render() {
    return (
      <div className="chat-content">
        <ul className="has-items">
          <li>
            <a onClick={this.toggleMessages.bind(this, "advisor")} className="item item--chat is-new">
              <img src="https://unsplash.it/100/100" className="item-status" />
              <h3 className="item-title">John Wilson <span className="label label--green">Advisor</span></h3>
              <p className="item-description">
                Though I may not respond right away, I'll get a notification just like your teach
              </p>
            </a>
          </li>
          <li>
            <a onClick={this.toggleMessages.bind(this, "announcements")} className="item item--announcements item--chat is-new">
              <h3 className="item-title">Announcements</h3>
              <p className="item-description">
                Finally, you can send a reply to this message thread to discuss anythying regardin
              </p>
            </a>
          </li>
          <li>
            <a onClick={this.toggleMessages.bind(this, "group")} className="item item--chat is-new">
              <h3 className="item-title">Group Discussion <span className="label label--blue">IS101</span></h3>
              <p className="item-description">
                Yeah, I totally agree with you! The simplicity of Syllabus is the best part. It's not confusing and it does a great job of helping me stay organized throughout all the work.
              </p>
            </a>
          </li>
          <li>
            <a onClick={this.toggleMessages.bind(this, "teacher")} className="item item--chat">
              <img src="https://unsplash.it/100/100" className="item-status" />
              <h3 className="item-title">Dr. Jackie Case <span className="label label--blue">IS101</span></h3>
              <p className="item-description">
                That makes sense! I will definitely keep that in mind!
              </p>
            </a>
          </li>
          <li>
            <a onClick={this.toggleMessages.bind(this, "student")} className="item item--chat">
              <img src="https://unsplash.it/100/100" className="item-status" />
              <h3 className="item-title">Geauxtrude Suedemont</h3>
              <p className="item-description">
                Not at all! So what's up?
              </p>
            </a>
          </li>
        </ul>
        <div className="card card--notification">At this time, this demo doesn't support full chat capabilities. With that said, you can still visit each chat thread to read about the different types of chats that Syllabus will support.</div>
      </div>
    )
  }
}
