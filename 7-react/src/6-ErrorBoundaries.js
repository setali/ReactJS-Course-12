import React, { Component } from 'react'

export default class Parent extends Component {
  render () {
    return (
      <div>
        <h2>My App</h2>
        <ErrorBoundaries>
          <Child />
        </ErrorBoundaries>
      </div>
    )
  }
}

class ErrorBoundaries extends Component {
  state = {
    hasError: false
  }

  // static getDerivedStateFromError (error) {
  //   console.log(error)
  //   return {
  //     hasError: true
  //   }
  // }

  componentDidCatch (error) {
    this.setState({ hasError: true })
  }

  render () {
    return this.state.hasError ? 'Oooops, Error' : this.props.children
  }
}

class Child extends Component {
  state = { count: 0 }

  componentDidMount () {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  componentDidUpdate (props, state) {
    if (this.state.count === 5) {
      throw new Error('App crashed!!!')
    }
  }

  render () {
    return <div>Count: {this.state.count}</div>
  }
}
