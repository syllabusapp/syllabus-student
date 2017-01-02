import React from "react"
import ReactDOM from "react-dom"

class CourseChat extends React.Component {
  render() {
    return (
      <div className="modal modal--chat">
        <div className="modal-overlay"></div>
        <div className="modal-content">
          <h1>Messages</h1>
        </div>
      </div>
    );
  }
}

module.exports = CourseChat;
