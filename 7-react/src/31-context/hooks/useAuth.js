import { useEffect, useState } from 'react'
import { getToken, removeToken, setToken } from '../tools/utils'
import request from '../tools/request'

export default function useAuth () {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loginError, setLoginError] = useState('')

  function login () {
    request('/users/1')
      .then(({ data }) => {
        setUser(data)
        setIsLoggedIn(true)
        setToken(data.email)
      })
      .catch(err => setLoginError('Error.'))
      .finally(() => setIsLoading(false))
  }

  function logout () {
    setUser({})
    setIsLoggedIn(false)
    removeToken()
  }

  function getUser () {
    request('/users/2')
      .then(({ data }) => {
        setUser(data)
        setIsLoggedIn(true)
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    getToken() ? getUser() : setIsLoading(false)
  }, [])

  return { user, isLoggedIn, isLoading, loginError, login, logout }
}
