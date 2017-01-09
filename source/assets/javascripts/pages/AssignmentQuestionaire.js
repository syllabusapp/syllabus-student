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
            <h1 className="heading heading--l mb1">Which of the following is a central issue in macroeconomics?</h1>
            <p>Only one (1) answer is needed for a correct response.</p>
          </header>
          <div className="has-radios">
            <div className="radio">
              <input type="radio" id="answer-a" name="question-1" />
              <label htmlFor="answer-a">The deregulation of the banking industry</label>
            </div>
            <div className="radio">
              <input type="radio" id="answer-b" name="question-1" />
              <label htmlFor="answer-b">Inflation of prescription drug prices</label>
            </div>
            <div className="radio">
              <input type="radio" id="answer-c" name="question-1" />
              <label htmlFor="answer-c">The effect of excise taxes on consumers' buying patterns</label>
            </div>
            <div className="radio">
              <input type="radio" id="answer-d" name="question-1" />
              <label htmlFor="answer-d">None of the above</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
