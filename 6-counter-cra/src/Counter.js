import React, { Component } from 'react'

export default class Counter extends Component {
  // state = {
  //   counter: 20
  // }

  constructor () {
    super()

    this.state = {
      counter: 10
    }

    // this.increase = this.increase.bind(this)
  }

  increase () {
    this.setState({ counter: this.state.counter + 1 })
  }

  decrease = () => this.setState({ counter: this.state.counter - 1 })

  render () {
    return (
      <div>
        <span>{this.state.counter}</span>
        <button style={{ marginLeft: '10px' }} onClick={() => this.increase()}>
          Increase
        </button>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    )
  }
}
