import axios from 'axios'
import { Fragment, Component } from 'react'

export default class MyComponent extends Component {
  state = {
    users: []
  }

  componentDidMount () {
    axios('https://jsonplaceholder.ir/users').then(({ data: users }) =>
      this.setState({ users })
    )
  }

  render () {
    return (
      <div>
        <table border='1'>
          <tbody>
            {this.state.users.map(user => (
              <tr key={user.id}>
                <Column user={user} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

class MyFragment extends Component {
  render () {
    return this.props.children
  }
}

class Column extends Component {
  render () {
    const { user } = this.props

    return (
      <>
        <td>{user.name}</td>
        <td>{user.username}</td>
      </>
    )

    return (
      <MyFragment>
        <td>{user.name}</td>
        <td>{user.username}</td>
      </MyFragment>
    )

    return (
      <Fragment>
        <td>{user.name}</td>
        <td>{user.username}</td>
      </Fragment>
    )
  }
}

// React.createElement('div', {},<td>{user.name}</td>, <td>{user.username}</td>)
