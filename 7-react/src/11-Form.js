import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    username: 'ali',
    pass: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  }

  handleChangeInput = e => this.setState({ [e.target.name]: e.target.value })

  render () {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              name='username'
              value={this.state.username}
              onChange={this.handleChangeInput}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name='pass'
              value={this.state.pass}
              onChange={this.handleChangeInput}
            />
          </div>
          <div>
            <button>submit</button>
          </div>
        </form>
      </div>
    )
  }
}

// export default class Form extends Component {
//   state = {
//     username: 'ali',
//     pass: ''
//   }

//   handleSubmit = event => {
//     event.preventDefault()
//     console.log(this.state)
//   }

//   handleChangUsername = e => this.setState({ username: e.target.value })

//   handleChangePassword = e => this.setState({ pass: e.target.value })

//   render () {
//     console.log(this.state)
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <label>Username</label>
//             <input
//               name='username'
//               value={this.state.username}
//               onChange={this.handleChangUsername}
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               name='pass'
//               value={this.state.pass}
//               onChange={this.handleChangePassword}
//             />
//           </div>
//           <div>
//             <button>submit</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }
