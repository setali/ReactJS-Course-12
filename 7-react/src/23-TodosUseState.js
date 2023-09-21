import React, { useState } from 'react'

export default function TodosUseState () {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')

  function generateTodo () {
    return {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      title: task
    }
  }

  function addTodo (event) {
    event.preventDefault()

    if (task) {
      setTodos(todos => [...todos, generateTodo()])
      setTask('')
    }
  }

  function removeTodo (id) {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input value={task} onChange={e => setTask(e.target.value)} />
        <button>Add</button>

        <ol>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.title}
              <span
                onClick={() => removeTodo(todo.id)}
                // onClick={removeTodo.bind(null, todo.id)}
                style={{ color: 'red', margin: '5px', cursor: 'pointer' }}
              >
                x
              </span>
            </li>
          ))}
        </ol>
      </form>
    </div>
  )
}
