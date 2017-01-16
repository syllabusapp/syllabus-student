import React, { Component } from 'react'

import DemoWelcome from "../components/DemoWelcome"

export default class extends Component {
  constructor(props) {
    super(props)
    this.hideWelcome = this.hideWelcome.bind(this)
    this.state = {
      welcome: false
    }
  }
  hideWelcome() {
    this.setState({
      welcome: false
    })
  }
  render() {
    return (
      <div className="row">
        {this.props.children}
        {this.state.welcome ? <DemoWelcome hideWelcome={this.hideWelcome} /> : null}
      </div>
    )
  }
}
