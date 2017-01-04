import React from "react"
import ReactDOM from "react-dom"

class CourseChat extends React.Component {
  constructor(props) {
    super(props);
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
        <div className="modal-content">
          <h1 className="heading">Messages</h1>
        </div>
      </div>
    );
  }
}

module.exports = CourseChat;
