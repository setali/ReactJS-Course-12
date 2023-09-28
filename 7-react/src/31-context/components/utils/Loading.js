import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

export default function Loading () {
  const theme = useContext(ThemeContext)

  return (
    <div className='box' style={theme}>
      <h2>Loading ...</h2>
    </div>
  )
}
