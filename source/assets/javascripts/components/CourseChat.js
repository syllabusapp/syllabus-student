import React, { Component } from "react"
import ReactDOM from "react-dom"

export default class extends Component {
  constructor(props) {
    super(props)
    this.toggleChat = this.toggleChat.bind(this)
  }
  toggleChat() {
    var that = this
    document.getElementsByClassName("modal")[0].classList += " is-exiting"
    setTimeout(function() {
      that.props.toggleChat()
    }, 275)
  }
  render() {
    return (
      <div className="modal modal--chat">
        <div onClick={this.toggleChat} className="modal-overlay"></div>
        <div className="chat modal-content">
          <div className="chat-header">
            <div>
              <h1 className="heading"><span className="label label--number">3</span>Messages</h1>
            </div>
            <div>
              <button className="chat-new">&times;</button>
              <button onClick={this.toggleChat} className="chat-close">&times;</button>
            </div>
          </div>
          <div className="chat-content">
            <ul className="has-items">
              <li>
                <a href="#" className="item item--chat is-new">
                  <img src="https://unsplash.it/100/100" className="item-status" />
                  <h3 className="item-title">John Wilson</h3>
                  <p className="item-description">
                    Hey! Did you find our homework difficult for MICEC? I can't seem to get a grasp on
                  </p>
                </a>
              </li>
              <li>
                <a href="#" className="item item--chat is-new">
                  <img src="https://unsplash.it/100/100" className="item-status" />
                  <h3 className="item-title">John Wilson</h3>
                  <p className="item-description">
                    Hey! Did you find our homework difficult for MICEC? I can't seem to get a grasp on
                  </p>
                </a>
              </li>
              <li>
                <a href="#" className="item item--chat">
                  <img src="https://unsplash.it/100/100" className="item-status" />
                  <h3 className="item-title">John Wilson</h3>
                  <p className="item-description">
                    Hey! Did you find our homework difficult for MICEC? I can't seem to get a grasp on
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
