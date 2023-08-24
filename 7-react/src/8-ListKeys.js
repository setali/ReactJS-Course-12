import axios from 'axios'
import React, { Component } from 'react'

export default class ListKeys extends Component {
  state = {
    users: []
  }

  componentDidMount () {
    axios('https://jsonplaceholder.ir/users').then(({ data: users }) =>
      this.setState({ users })
    )

    setTimeout(() => {
      this.setState(this.state.users.reverse())
    }, 5000)
  }

  render () {
    return (
      <div>
        <ol>
          {this.state.users.map((user, index) => (
            <User key={user.id} user={user} />
          ))}
        </ol>
      </div>
    )
  }
}

function User ({ user }) {
  return <li>{user.name}</li>
}
