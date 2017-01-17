import React, { Component } from "react"
import { Link } from "react-router"
import Editor from "react-medium-editor"

import AssignmentNavigation from "../components/AssignmentNavigation"

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '<h2>Writing in Syllabus</h2><p>Writing a paper or critical thought response in Syllabus is super easy and enjoyable. Simply begin typing, then highlight the text that you want to format. This text you are reading is a sample paper, so go ahead and give it a try: highlight this text. Writing a paper within Syllabus allows a student to save their work then pick up where the left off on a completely different device.</p><h2>Style Guides</h2><p>Many teachers prefer to have students type papers in a specific format such as Turabian or Chicago Manual of Style. With Syllabus, the teacher can decide if they want to create an upload assignment and have their students upload a Word document with the correct format.</p>'
    }
  }
  render() {
    return (
      <div>
        <AssignmentNavigation />
        <div className="cell cell--animate well well--content">
          <div className="g g--spaceBetween">
            <div className="g-b g-b--4of12">
              <p className="mb025 mt5">Week 1 &bull; Critical Thought Assignment</p>
              <h1 className="heading heading--l">Directions</h1>
              <p>Please discuss the importance of respecting morals in modern entertainment. Your response must address the following points in <em>at least</em> <strong>5&nbsp;paragraphs</strong>:</p>
              <ol className="list list--ordered">
                <li>What are traditional morals?</li>
                <li>What is modern entertainment?</li>
                <li>Traditional morals vs. modern entertainment</li>
                <li>Traditional morals within modern entertainment</li>
                <li>How modern entertainment affects traditional morals</li>
              </ol>
            </div>
            <div className="g-b g-b--1of12 g-b--divider"></div>
            <div className="g-b g-b--7of12 editable mt5">
              <header className="editable-header">
                <h2 className="heading heading--l">My Response</h2>
                <div>
                  <button className="button button--gray">Undo</button>
                  <button className="button">Save</button>
                </div>
              </header>
              <Editor
                className="editable-article"
                options={
                  {
                    placeholder: {
                      text: 'Begin typing your response here...'
                    },
                    toolbar: {
                      buttons: ['h1', 'h2', 'bold', 'italic', 'underline', 'quote']
                    }
                  }
                }
                tag="article"
                text={this.state.text} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
