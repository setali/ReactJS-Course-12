import React, { useReducer, useState } from 'react'

function generateTodo (todos, task) {
  return {
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    title: task
  }
}

function reducer (state, { type, payload }) {
  switch (type) {
    case 'ADD_TODO':
      return [...state, generateTodo(state, payload)]

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== payload)

    default:
      return state
  }
}

export default function TodosUseReducer () {
  const [todos, dispatch] = useReducer(reducer, [])
  const [task, setTask] = useState('')

  function addTodo (event) {
    event.preventDefault()

    if (task) {
      dispatch({ type: 'ADD_TODO', payload: task })
      setTask('')
    }
  }

  function removeTodo (id) {
    dispatch({ type: 'REMOVE_TODO', payload: id })
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
