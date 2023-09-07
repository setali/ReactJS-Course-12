import { useState } from 'react'

function useField (defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return {
    value,
    onChange: e => setValue(e.target.value)
  }
}

export default function CustomHook () {
  const username = useField('ali')
  const password = useField()

  return (
    <div>
      <form>
        <input {...username} />
        <input {...password} />
      </form>
    </div>
  )
}

// export default function CustomHook () {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   console.log(username, password)

//   return (
//     <div>
//       <form>
//         <input value={username} onChange={e => setUsername(e.target.value)} />
//         <input value={password} onChange={e => setPassword(e.target.value)} />
//       </form>
//     </div>
//   )
// }
