import React, { Component } from "react"
import ReactDOM from "react-dom"

class AdvisorFeed extends Component {
  render() {
    return (
      <ol>
        <li className="message message--sent">Hi! I need some help, but I'm not sure where to start.</li>
        <li className="message message--received">That's what I'm here for! What's going on? How can I help? 😁</li>
        <li className="message message--sent">I'm not sure what the best way is to contact my teacher.</li>
        <li className="message message--sent">I know her email is provided, but I have some questions about my coursework that is semi time-sensitive.</li>
        <li className="message message--sent">Can I chat with her even though she might not be at her computer?</li>
        <li className="message message--received">Ah! Yes. That's what is great about Syllabus.</li>
        <li className="message message--received">You can chat with your teacher at any time and they will get the notification that a message is waiting on them the next time they long it.</li>
        <li className="message message--sent">Oh! Wow. That's pretty sweet. Will I bug her by messaging her too much?</li>
        <li className="message message--received">Your teacher will actually prefer to discuss things with you through chat as it doesn't fill up her email inbox. 😁 &nbsp;So no need to worry about bugging your teachers.</li>
        <li className="message message--received">They will love talking with you through chat just as much as you enjoy it.</li>
        <li className="message message--sent">Excellent! This is going to be awesome. Thanks for the help!</li>
        <li className="message message--received">Sure thing! Glad to help. I'm always happy to answer any questions you may have.</li>
        <li className="message message--received">Though I may not respond right away, I'll get a notification just like your teachers and will respond as soon as I return!</li>
      </ol>
    )
  }
}

class AnnouncementFeed extends Component {
  render() {
    return (
      <ol>
        <li className="message message--received"></li>
        <li className="message message--sent"></li>
      </ol>
    )
  }
}

class GroupFeed extends Component {
  render() {
    return (
      <ol>
        <li className="message message--received"></li>
        <li className="message message--sent"></li>
      </ol>
    )
  }
}

class StudentFeed extends Component {
  render() {
    return (
      <ol>
        <li className="message message--received"></li>
        <li className="message message--sent"></li>
      </ol>
    )
  }
}

class TeacherFeed extends Component {
  render() {
    return (
      <ol>
        <li className="message message--received"></li>
        <li className="message message--sent"></li>
      </ol>
    )
  }
}

export default class extends Component {
  componentDidMount() {
    var container = document.getElementById("message-container")
    container.scrollTop = 10000
  }
  render() {
    return (
      <div>
        <div className="chat-content chat-content--short" id="message-container">
          {
            this.props.messages == "advisor" ? <AdvisorFeed /> :
            this.props.messages == "announcements" ? <AnnouncementFeed /> :
            this.props.messages == "group" ? <GroupFeed /> :
            this.props.messages == "student" ? <StudentFeed /> :
            this.props.messages == "teacher" ? <TeacherFeed /> :
            this.props.messages
          }
        </div>
        <div className="chat-create">
          <input type="input" placeholder="New message..." />
        </div>
      </div>
    )
  }
}
