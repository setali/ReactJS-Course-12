import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

export default function Page404 () {
  const theme = useContext(ThemeContext)

  return (
    <div className='box' style={theme}>
      <h2>Not Found</h2>
      <p>Not found Page</p>
    </div>
  )
}
