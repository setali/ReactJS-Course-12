const container = document.getElementById('root')

// State is immutable

class Counter extends React.Component {
  state = {
    counter: 0
  }

  valueElement = () => {
    return React.createElement('span', {}, this.state.counter)
  }

  increaseButton = () => {
    return React.createElement(
      'button',
      {
        style: { marginLeft: '10px' },
        onClick: () => {
          this.setState({ counter: this.state.counter + 1 })
        }
      },
      'Increase'
    )
  }

  decreaseButton = () => {
    return React.createElement(
      'button',
      {
        onClick: () => {
          this.setState({ counter: this.state.counter - 1 })
        }
      },
      'Decrease'
    )
  }

  render () {
    console.log('render', this.state)
    return React.createElement(
      'div',
      {},
      this.valueElement(),
      this.increaseButton(),
      this.decreaseButton()
    )
  }
}

const el = React.createElement(Counter)
// const el = React.createElement('div', {}, 'Salam')

// ReactDOM.render(el, container)

const root = ReactDOM.createRoot(container)
root.render(el)
