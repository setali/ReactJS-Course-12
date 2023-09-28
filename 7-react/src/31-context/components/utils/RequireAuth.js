import React, { useContext } from 'react'
import UserContext from '../../contexts/UserContext'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from './Loading'

export default function RequireAuth ({ children }) {
  const { isLoggedIn, isLoading } = useContext(UserContext)

  const location = useLocation()

  if (isLoading) {
    return <Loading />
  }

  if (isLoggedIn) {
    return children
  }

  return <Navigate to='/login' state={{ from: location.pathname }} />
}
