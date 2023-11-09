import Counter from './Counter'
import Post from './Post'
import Todo from './Todo'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>

      <div>
        <Counter />
      </div>

      <Post />
      <Todo />
    </div>
  )
}

export default App
