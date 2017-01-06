import React, { Component } from "react"
import { Link } from "react-router"

export default class extends Component {
  render() {
    return (
      <Link to="/" className={this.props.centered ? "logo logo--centered" : "logo"}>
        <img src="/assets/images/logo.svg" />
      </Link>
    );
  }
}
