import React, { useState, useReducer } from 'react'

const DEFAULT_COUNT = 0

function reducer (state, action) {
  switch (action.type) {
    case 'ADD':
      return state + action.payload

    case 'SUB':
      return state - action.payload

    case 'RESET':
      return DEFAULT_COUNT

    default:
      return state
  }
}

export default function UseReducer () {
  const [count, setCount] = useState(DEFAULT_COUNT)

  const [state, dispatch] = useReducer(reducer, DEFAULT_COUNT)

  return (
    <div>
      State: {state}
      <button onClick={() => dispatch({ type: 'ADD', payload: 1 })}>+</button>
      <button onClick={() => dispatch({ type: 'ADD', payload: 2 })}>+2</button>
      <button onClick={() => dispatch({ type: 'ADD', payload: 3 })}>+3</button>
      <button onClick={() => dispatch({ type: 'SUB', payload: 1 })}>-</button>
      <button onClick={() => dispatch({ type: 'SUB', payload: 5 })}>-5</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
      <hr />
      Count: {count}
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <button onClick={() => setCount(c => c + 2)}>+2</button>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <button onClick={() => setCount(DEFAULT_COUNT)}>Reset</button>
    </div>
  )
}
