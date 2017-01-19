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
      </ol>
    )
  }
}

class AnnouncementFeed extends Component {
  render() {
    return (
      <ol className="has-announcements">
        <li className="message message--received">Welcome to the first week of Introduction to Syllabus! This week's work is all about getting used to the Syllabus platform. We hope that you find it both easy and enjoyable to use.</li>
        <li className="message message--received">If you have any questions about the platform, simply create a new message to "advisor" and Syllabus will direct your question accordingly.</li>
        <li className="message message--received">If you have any questions about the course work, simply click on the "Contact Teacher" link in the lower right of the course's dashboard screen.</li>
        <li className="message message--received">Finally, you can send a reply to this message thread to discuss anythying regarding these announcements with the rest of your class!</li>
      </ol>
    )
  }
}

class GroupFeed extends Component {
  render() {
    return (
      <ol className="has-several">
        <li className="message message--subject">Please address Syllabus's role in higher education and how you believe it will help improve online and in-classroom education for universities and other higher education institutions.</li>
        <li className="message message--received">
          <img src="https://unsplash.it/100/100" className="message-avatar" />
          There are two reasons I believe Syllabus will make headway in the online higher education space. The first reason pertains to in-browser capabilities. I get to complete all my schoolwork for my degree without having to download a single piece of software, PDF or other file. The second reason pertains to the enjoyment of using Syllabus. I'm not confused at all as to what's due and when. Idon't feel like I'll ever be late on an assignment.
        </li>
        <li className="message message--received is-typing">
          <img src="https://unsplash.it/100/100" className="message-avatar" />
        </li>
      </ol>
    )
  }
}

class StudentFeed extends Component {
  render() {
    return (
      <ol>
        <li className="message message--received">Hey! Did you find our homework for MICEC difficult this week?</li>
        <li className="message message--received">I can't seem to wrap my head around it.</li>
        <li className="message message--sent">Yo! It definitely was a bit more difficult than normal, but I *think* I got it correct.</li>
        <li className="message message--sent">I'm happy to help if you'd like it.</li>
        <li className="message message--received">That would be fantastic! You don't mind?</li>
        <li className="message message--sent">Not at all! So what's up?</li>
        <li className="message message--received is-typing"></li>
      </ol>
    )
  }
}

class TeacherFeed extends Component {
  render() {
    return (
      <ol>
        <li className="message message--sent">Hi Dr. Case! I have a few questions. Is it okay to message you here?</li>
        <li className="message message--received">Sure! Happy to help!</li>
        <li className="message message--received">What questions do you have?</li>
        <li className="message message--sent">Thanks! My first set of questions are...</li>
        <li className="message message--sent">What happens if I miss a deadline for an assignment?</li>
        <li className="message message--sent">Do I miss my opprotunity to finish the assignment?</li>
        <li className="message message--received">Great question! Syllabus does a great job of letting you know what assignments are late. It will highlight late assignments in red so that you are sure to see it.</li>
        <li className="message message--received">You'll still get the opportunity to finish the assignment, but be aware that you might get some points deducted if I so choose.</li>
        <li className="message message--received">With that said, please keep in mind that I'll be understanding if a late assignment is unavoidable due to personal reasons.</li>
        <li className="message message--sent">Oh! Okay, that's great! I'm certainly not planning on being late on any assignments. I just like to be aware of all that could possibly happen.</li>
        <li className="message message--received">Certainly! Now, if you do plan on being out for a vacation, for example, you can simply notify me that you will be absent by clicking on the link in the bottom right of the course dashboard.</li>
        <li className="message message--received">The sooner you let me know that you will be absent, the higher chance you will have of not having any points deducted.</li>
        <li className="message message--sent">That makes sense! I will definitely keep that in mind!</li>
        <li className="message message--received is-typing"></li>
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
