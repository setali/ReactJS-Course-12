import { useEffect, useState } from 'react'

// count #AC12EF => 0
// count #ABC24F => 1

export default function AdvanceStateEffect () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect', count)
    setInterval(() => {
      console.log('interval', count)
      setCount(c => c + 1)
    }, 1000)
  }, [])

  return <div>Count: {count}</div>
}
