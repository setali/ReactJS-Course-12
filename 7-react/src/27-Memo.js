import React, { useState } from 'react'

export default function Parent () {
  const [counter1, setCounter1] = useState(1)
  const [counter2, setCounter2] = useState(1)

  console.log('Parent')
  return (
    <div>
      <div>Counter1: {counter1}</div>
      <div>Counter2: {counter2}</div>

      <button onClick={() => setCounter1(c => c + 1)}>Change Counter 1</button>

      <button onClick={() => setCounter2(c => c + 1)}>Change Counter 2</button>

      <MyComponent counter={counter1} />
      <MyMemoComponent counter={counter1} />
    </div>
  )
}

function MyComponent ({ counter }) {
  console.log('MyComponent', counter)
  return <div>MyComponent {counter}</div>
}

const MyMemoComponent = React.memo(function ({ counter }) {
  console.log('MyMemoComponent', counter)
  return <div>MyMemoComponent {counter}</div>
})
