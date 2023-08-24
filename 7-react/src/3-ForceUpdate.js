import React, { Component } from 'react'

export default class ForceUpdate extends Component {
  componentDidMount () {
    console.log('componentDidMount')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <div>
        {Math.random()}
        <button onClick={() => this.forceUpdate()}>Get random</button>
        <button>Pouyan</button>
      </div>
    )
  }
}
