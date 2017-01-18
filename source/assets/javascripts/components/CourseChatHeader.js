import React, { Component } from "react"
import ReactDOM from "react-dom"

class DefaultHeader extends Component {
  constructor(props) {
    super(props)
    this.toggleChat = this.toggleChat.bind(this)
  }
  toggleChat() {
    this.props.toggleChat()
  }
  render() {
    return (
      <div className="chat-header">
        <div>
          <h1 className="heading">
            <span className="label label--number">3</span>
            Messages
          </h1>
        </div>
        <div>
          <button className="chat-new">&times;</button>
          <button onClick={this.toggleChat} className="chat-close">&times;</button>
        </div>
      </div>
    )
  }
}

class MessagesHeader extends Component {
  constructor(props) {
    super(props)
    this.toggleChat = this.toggleChat.bind(this)
    this.toggleMessages = this.toggleMessages.bind(this)
  }
  toggleChat() {
    this.props.toggleChat()
  }
  toggleMessages(value) {
    this.props.toggleMessages(value)
  }
  render() {
    return (
      <div className="chat-header">
        <button onClick={this.toggleMessages.bind(this, "default")} className="chat-back"></button>
        <div>
          <h1 className="heading">
            <img className="label label--number" src="https://unsplash.it/100/100" />
            John Wilson
          </h1>
        </div>
        <button onClick={this.toggleChat} className="chat-close">&times;</button>
      </div>
    )
  }
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.toggleChat = this.toggleChat.bind(this)
    this.toggleMessages = this.toggleMessages.bind(this)
  }
  toggleChat() {
    this.props.toggleChat()
  }
  toggleMessages(value) {
    this.props.toggleMessages(value)
  }
  render() {
    if (this.props.messages != "default") {
      return <MessagesHeader toggleChat={this.toggleChat} toggleMessages={this.toggleMessages} />
    } else {
      return <DefaultHeader toggleChat={this.toggleChat} />
    }
  }
}
