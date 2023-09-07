import React, { useEffect, useState } from 'react'

export default function HookRules () {
  const [count, setCount] = useState(0)
  const [ali, setAli] = useState('')

  //   useEffect(() => {
  //     const [state, setState] = useState(0)
  //   }, [])

  //   function func() {
  //     const [first, setFirst] = useState(0)
  //   }

  //   for (let index = 0; index < 4; index++) {
  //     const [state, setState] = useState(0)
  //   }

  //   if (count % 2) {
  //     return 'ali'
  //     // const [state, setState] = useState(0)
  //   }

  //   const [state, setState] = useState(0)

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  )
}
