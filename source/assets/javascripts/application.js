import React from 'react'
import ReactDOM from 'react-dom'

class Index extends React.Component {
  render() {
    return (
      <div className="cell well">
        <a href="#">
          <img src="/assets/images/logo.svg" />
        </a>
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById("app")
)
