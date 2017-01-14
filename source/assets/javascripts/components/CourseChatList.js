import React, { Component } from "react"
import ReactDOM from "react-dom"

export default class extends Component {
  constructor(props) {
    super(props)
    this.toggleMessages = this.toggleMessages.bind(this)
  }
  toggleMessages() {
    this.props.toggleMessages()
  }
  render() {
    return (
      <div className="chat-content">
        <ul className="has-items">
          <li>
            <a onClick={this.toggleMessages} className="item item--chat is-new">
              <img src="https://unsplash.it/100/100" className="item-status" />
              <h3 className="item-title">John Wilson</h3>
              <p className="item-description">
                Hey! Did you find our homework difficult for MICEC? I can't seem to get a grasp on
              </p>
            </a>
          </li>
          <li>
            <a onClick={this.toggleMessages} className="item item--chat is-new">
              <img src="https://unsplash.it/100/100" className="item-status" />
              <h3 className="item-title">John Wilson</h3>
              <p className="item-description">
                Hey! Did you find our homework difficult for MICEC? I can't seem to get a grasp on
              </p>
            </a>
          </li>
          <li>
            <a onClick={this.toggleMessages} className="item item--chat">
              <img src="https://unsplash.it/100/100" className="item-status" />
              <h3 className="item-title">John Wilson</h3>
              <p className="item-description">
                Hey! Did you find our homework difficult for MICEC? I can't seem to get a grasp on
              </p>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
