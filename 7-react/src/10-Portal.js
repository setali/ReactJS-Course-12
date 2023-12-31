import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class MyComponent extends Component {
  state = { counter: 0 }

  componentDidMount () {
    setInterval(() => this.setState({ counter: this.state.counter + 1 }), 1000)
  }

  render () {
    return ReactDOM.createPortal(
      <div>Count: {this.state.counter}</div>,
      document.getElementById('portal')
    )
  }
}
