import React, { Component } from 'react'

export default class CreateRef extends Component {
  state = {
    show: false
  }

  textInputRef = React.createRef()

  toggle = () =>
    this.setState(
      state => ({ show: !state.show }),
      () => this.textInputRef.current?.focus()
    )

  //   componentDidUpdate () {
  //     this.textInputRef.current?.focus()
  //   }

  render () {
    console.log(this.textInputRef)

    return (
      <div>
        <button onClick={this.toggle}>
          {this.state.show ? 'Hide' : 'Show'}
        </button>
        {this.state.show && <input ref={this.textInputRef} />}
      </div>
    )
  }
}
