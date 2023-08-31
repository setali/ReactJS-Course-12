import axios from 'axios'
import React, { Component } from 'react'

export default class Users extends Component {
  state = { users: [] }

  componentDidMount () {
    axios('https://jsonplaceholder.ir/users').then(({ data }) =>
      this.setState({ users: data })
    )
  }

  render () {
    return (
      <div>
        {this.state.users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

function User (props) {
  console.log(props)
  return <div>{props.user.name}</div>
}
