import React, { useEffect, useState, useCallback } from 'react'

export default function UseCallback () {
  const [count, setCount] = useState(0)
  const [height, setHeight] = useState()

  useEffect(() => {
    setInterval(() => setCount(c => c + 1), 5000)
  }, [])

  const myInputRef = useCallback(
    node => {
      console.log(node, count)
      node?.focus()
    },
    [count]
  )

  const myHeightRef = useCallback(node => {
    node && setHeight(node.getBoundingClientRect().height)
  }, [])

  return (
    <div>
      <h2 ref={myHeightRef}>Height: {height}</h2>
      <hr />
      <input ref={myInputRef} />
      <hr />
      Count: {count}
    </div>
  )
}
