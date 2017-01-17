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
        <div className="cell cell--animate cell--l well well--centered well--content">
          <header className="cell cell--m tac">
            <p className="mb0 mt5">Week 1 &bull; Questionaire Assignment</p>
            <ol className="list list--stepper">
              <li><span className="list-complete"></span></li>
              <li><span className="list-complete"></span></li>
              <li className="list-current">3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
            </ol>
            <h1 className="heading heading--l mb1">What is Syllabus great at?</h1>
            <p>Only one (1) answer is needed for a correct response.</p>
          </header>
          <div className="has-radios">
            <div className="radio">
              <input type="radio" id="answer-a" name="question-1" />
              <label htmlFor="answer-a">Taking care of your pet while you are on vacation.</label>
            </div>
            <div className="radio">
              <input type="radio" id="answer-b" name="question-1" />
              <label htmlFor="answer-b">Making online learning easy and enjoyable.</label>
            </div>
            <div className="radio">
              <input type="radio" id="answer-c" name="question-1" />
              <label htmlFor="answer-c">Find and buy tickets to your favorite concert.</label>
            </div>
            <div className="radio">
              <input type="radio" id="answer-d" name="question-1" />
              <label htmlFor="answer-d">All of the above</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
