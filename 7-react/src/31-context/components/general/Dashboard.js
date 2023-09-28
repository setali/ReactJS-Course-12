import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'

export default function Dashboard () {
  const theme = useContext(ThemeContext)
  const { user } = useContext(UserContext)

  return (
    <div className='box' style={theme}>
      <h2>Dashboard</h2>

      <div>
        <span>Email:</span>
        <span>{user.email}</span>
      </div>
    </div>
  )
}
