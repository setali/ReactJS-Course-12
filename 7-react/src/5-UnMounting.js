import React, { Component } from 'react'

export default class Parent extends Component {
  state = { mount: true }

  render () {
    return (
      <div>
        <button onClick={() => this.setState({ mount: !this.state.mount })}>
          {this.state.mount ? 'UnMount' : 'Mount'}
        </button>
        {this.state.mount && <Child />}

        {/* <div style={{ display: this.state.mount ? 'block' : 'none' }}>
          <Child />
        </div> */}
      </div>
    )
  }
}

class Child extends Component {
  state = { count: 0 }

  constructor () {
    super()
    console.log('constructor')
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
    clearInterval(this.intervalId)
  }

  componentDidMount () {
    this.intervalId = setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  render () {
    return <div>Count: {this.state.count}</div>
  }
}
