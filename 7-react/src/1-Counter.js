import React, { Component } from 'react'

export default class Counter extends Component {
  //   state = {
  //     counter: this.props.defaultCounter ?? 0
  //   }

  constructor (props) {
    super(props)
    this.state = {
      counter: props.defaultCounter ?? 0
    }
  }

  increase = () => this.setState({ counter: this.state.counter + 1 })

  decrease = () => this.setState({ counter: this.state.counter - 1 })

  render () {
    console.log(this.props)
    return (
      <div>
        Counter: {this.state.counter}
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    )
  }
}
