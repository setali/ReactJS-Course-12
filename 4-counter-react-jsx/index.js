const container = document.getElementById('root')

// State is immutable

class Counter extends React.Component {
  state = {
    counter: 0
  }

  increase = () => this.setState({ counter: this.state.counter + 1 })

  decrease = () => this.setState({ counter: this.state.counter - 1 })

  render () {
    return (
      <div>
        <span>{this.state.counter}</span>
        <button style={{ marginLeft: '10px' }} onClick={this.increase}>
          Increase
        </button>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(container)
root.render(
  <div>
    <Counter />
    <Counter />
  </div>
)
// root.render(
//   React.createElement(
//     'div',
//     {},
//     React.createElement(Counter),
//     React.createElement(Counter)
//   )
// )
