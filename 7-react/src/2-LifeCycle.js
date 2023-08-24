import React, { Component } from 'react'

export default class LifeCycle extends Component {
  constructor (props) {
    super(props)
    console.log('Constructor')
    this.state = {
      counter: 0,
      user: undefined
    }
  }

  static getDerivedStateFromProps (props, state) {
    console.log('getDerivedStateFromProps', state)

    if (state.counter % 2) {
      return {
        counter: state.counter + 1
      }
    }

    return null
  }

  shouldComponentUpdate (props, state) {
    console.log('shouldComponentUpdate', state, this.state)
    if (state.counter % 4 === 0) {
      return false
    }
    return true
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  componentDidMount () {
    console.log('componentDidMount')

    // fetch('https://jsonplaceholder.ir/users/1')
    //   .then(response => response.json())
    //   .then(data => this.setState({ user: data }))
  }

  render () {
    console.log('render')
    return (
      <div>
        Username:
        {this.state.user?.address?.country}
        <hr />
        Counter: {this.state.counter}
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
      </div>
    )
  }
}
