import React, { useEffect, useMemo, useState } from 'react'

// const origData = [
//   { id: 1, title: 'Yek', parent: null },
//   { id: 2, title: 'Do', parent: 1 },
//   { id: 3, title: 'Se', parent: 1 },
//   { id: 4, title: 'Chahar', parent: null },
//   { id: 5, title: 'Panj', parent: 3 },
//   { id: 6, title: 'Shesh', parent: 3 }
// ]

// const data = [
//   {
//     id: 1,
//     title: 'Yek',
//     children: [
//       { id: 2, title: 'DO' },
//       {
//         id: 23,
//         title: 'Se',
//         children: [
//           { id: 5, title: 'Panj' },
//           { id: 6, title: 'Shesh' }
//         ]
//       }
//     ]
//   },
//   { id: 4, title: 'Chahr' }
// ]

// const newData = useMemo(() => {
//   return nestedToFlat()
// }, [origData])

export default function Parent () {
  const [mount, setMount] = useState(true)
  return (
    <div>
      <button onClick={() => setMount(m => !m)}>
        {mount ? 'UnMount' : 'Mount'}
      </button>
      {mount && <Child />}
    </div>
  )
}

function Child () {
  const [count, setCount] = useState(0)
  //   const [value, setValue] = useState(heavyProcess)

  function heavyProcess () {
    console.log('heavyProcess')
    return (999999999n ** 999999n).toString().length
  }

  //   useEffect(() => {
  //     setValue(heavyProcess())
  //   }, [count])

  const value = useMemo(() => {
    return heavyProcess()
  }, [])

  useEffect(() => {
    setInterval(() => setCount(c => c + 1), 1000)
  }, [])

  return (
    <div>
      Count: {count}
      <hr />
      Value: {value}
    </div>
  )
}
