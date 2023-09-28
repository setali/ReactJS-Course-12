import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import LoginForm from './LoginForm'
import UserContext from '../../contexts/UserContext'
import { Navigate, useLocation } from 'react-router-dom'

export default function Contact () {
  const theme = useContext(ThemeContext)
  const { isLoggedIn } = useContext(UserContext)

  const location = useLocation()

  if (isLoggedIn) {
    return <Navigate to={location.state?.from || '/'} />
  }

  return (
    <div className='box' style={theme}>
      <h2>Login Page</h2>
      <LoginForm />
    </div>
  )
}
