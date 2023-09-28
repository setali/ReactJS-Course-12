import React, { useEffect, useRef } from 'react'

export default function UseRef () {
  const ref = useRef()

  useEffect(() => {
    ref.current.focus()
  }, [])

  return (
    <div>
      <input ref={ref} />
    </div>
  )
}
