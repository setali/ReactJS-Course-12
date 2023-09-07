import { useState } from 'react'

export default function UseState () {
  const [counter, setCounter] = useState(1)
  const [state, setState] = useState(
    () => (999999n ** 9999999n).toString().length
  )

  return (
    <div>
      Value: {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <hr />
      State: {state}
      <button onClick={() => setState(state + 1)}>+</button>
    </div>
  )
}

// export default function UseState () {
//     const state = useState(1)

//     console.log(state)

//     return (
//       <div>
//         Value: {state[0]}
//         <button onClick={() => state[1](state[0] + 1)}>+</button>
//       </div>
//     )
//   }
