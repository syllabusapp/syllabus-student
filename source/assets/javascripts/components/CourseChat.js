import React, { Component } from "react"
import ReactDOM from "react-dom"

import CourseChatFeed from "../components/CourseChatFeed"
import CourseChatHeader from "../components/CourseChatHeader"
import CourseChatList from "../components/CourseChatList"

export default class extends Component {
  constructor(props) {
    super(props)
    this.toggleChat = this.toggleChat.bind(this)
    this.toggleMessages = this.toggleMessages.bind(this)
    this.state = {
      messages: false
    }
  }
  toggleChat() {
    var that = this
    document.getElementsByClassName("modal")[0].classList += " is-exiting"
    setTimeout(function() {
      that.props.toggleChat()
    }, 275)
  }
  toggleMessages() {
    this.setState(prevState => ({
      messages: !prevState.messages
    }))
  }
  render() {
    return (
      <div className="modal modal--chat">
        <div onClick={this.toggleChat} className="modal-overlay"></div>
        <div className="chat modal-content">
          <CourseChatHeader messages={this.state.messages} toggleChat={this.toggleChat} toggleMessages={this.toggleMessages} />
          {this.state.messages ? <CourseChatFeed /> :  <CourseChatList toggleMessages={this.toggleMessages} />}
        </div>
      </div>
    )
  }
}
