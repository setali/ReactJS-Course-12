import React, { Component } from 'react'

export default class Parent extends Component {
  state = {
    counter1: 0,
    counter2: 0
  }

  increament = name => {
    this.setState(s => ({
      [name]: s[name] + 1
    }))
  }

  render () {
    console.log('Parent')
    return (
      <div>
        <div>Counter1: {this.state.counter1}</div>
        <div>Counter2: {this.state.counter2}</div>

        <button onClick={() => this.increament('counter1')}>
          Change Counter 1
        </button>

        <button onClick={() => this.increament('counter2')}>
          Change Counter 2
        </button>

        <MyComponent counter={{ value: this.state.counter1 }} />
        <MyPureComponent counter={{ value: this.state.counter1 }} />
      </div>
    )
  }
}

class MyComponent extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    // if (nextProps.counter.value !== this.props.counter.value) {
    if (JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
      return true
    }

    return false
  }

  render () {
    console.log('MyComponent', this.props.counter)
    return <div>MyComponent {this.props.counter.value}</div>
  }
}

class MyPureComponent extends React.PureComponent {
  render () {
    console.log('MyPureComponent', this.props.counter)
    return <div>MyPureComponent {this.props.counter.value}</div>
  }
}
