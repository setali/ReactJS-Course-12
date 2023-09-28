import React, { useContext } from 'react'
import useField from '../../hooks/useField'
import UserContext from '../../contexts/UserContext'

export default function LoginForm () {
  const username = useField()
  const password = useField()

  const { login } = useContext(UserContext)

  function handleSubmit (e) {
    e.preventDefault()
    login()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input {...username} />
        <input {...password} />
        <button>Submit</button>
      </form>
    </div>
  )
}
