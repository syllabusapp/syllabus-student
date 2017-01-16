import React, { Component } from "react"
import { Link } from "react-router"

import AssignmentNavigation from "../components/AssignmentNavigation"

export default class extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <AssignmentNavigation />
        <main>
          <header className="cell cell--animate well well--content pb1 pt1 tac">
            <p className="mb025 mt5">Week 1 &bull; Reading Assignment</p>
            <h1 className="heading heading--l">Completing Coursework in Syllabus</h1>
          </header>
          <article className="article cell cell--animate cell--m">
            <p>Completing coursework and assignments in Syllabus is incredibly easy. Thanks to modern technologies, students can complete an entire course without having to download a single file (though the option to download will still be available). This allows students to securely complete their coursework on their computer or public devices. Depending on the assignment type, Syllabus will display the course material in the most efficient way. To progress through their coursework, students simply visit each assignment’s page, complete the work, and mark the assignment as complete, all without having to navigate around the interface and download unnecessary files.</p>
            <p>To make coursework easy, Syllabus supports many different assignment types; you are currently in an <em>inline</em> reading assignment. This specific article is written and presented within Syllabus itself. For other types of reading assignments, Syllabus will also support a <em>book reference</em> for students who purchased a physical book for their coursework, as well as <em>uploaded PDFs</em> where students can read the PDF without having to download anything.</p>
            <p>Syllabus also supports <em>file uploads</em> for turning in assignments made in other programs and <em>critical thought</em> assignments. Critical thought assignments allow students to compose complete papers within their browser using an advanced text editor. A demo of the critical thought editor is available within this introduction course.</p>
            <p>Sometimes, reading and upload assignments aren’t quite enough. For those assignments, Syllabus supports multimedia such as <em>audio</em> and <em>video</em> for prerecorded lectures, messages, programs, etc.</p>
            <p>Finally, standard <em>questionnaire</em> assignments are available for traditional-style testing. By randomizing both questions and answers, Syllabus reduces the changes of cheating.</p>
          </article>
          <footer className="cell cell--s well well--l tac">
            <Link to="/course" className="button button--green button--l">Complete &amp; Continue</Link>
          </footer>
        </main>
      </div>
    )
  }
}
