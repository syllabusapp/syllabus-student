import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="row">
        {this.props.children}
      </div>
    )
  }
}
