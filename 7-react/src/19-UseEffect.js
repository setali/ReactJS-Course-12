import { useEffect, useState } from 'react'

import React from 'react'

export default function Parent () {
  const [mount, setMount] = useState(true)

  return (
    <div>
      <button onClick={() => setMount(!mount)}>
        {mount ? 'Unmount' : 'Mount'}
      </button>
      {mount && <UseEffect />}
    </div>
  )
}

function UseEffect () {
  const [count, setCount] = useState(0)
  const [state, setState] = useState(1)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const timeoutId = setTimeout(() => setState(state + 1), 1000)

    console.log('1timeoutId', timeoutId, state)

    return () => {
      console.log('CleanUp', timeoutId, state)
      clearTimeout(timeoutId)
    }
  }, [state])

  useEffect(() => {
    console.log('componentDidMount')
  }, [])

  // cDM, cDU
  useEffect(() => {
    console.log('Count', count)
  }, [count])

  //   useEffect(() => {
  //     console.log('Bad practice')
  //   })

  useEffect(() => {
    return () => {
      console.log('ComponentWillUnMount')
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    fetch('https://jsonplaceholder.ir/users', { signal: controller.signal })
      .then(response => response.json())
      .then(data => setUsers(data))

    return () => {
      controller.abort()
    }
  }, [])

  //   console.log('render')

  return (
    <div>
      <ol>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
      <hr />
      Count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <hr />
      State: {state}
    </div>
  )
}
