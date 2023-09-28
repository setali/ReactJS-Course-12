import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

export default function Contact () {
  const theme = useContext(ThemeContext)

  return (
    <div className='box' style={theme}>
      <h2>Contact Page</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim maiores
        totam aperiam nulla, architecto voluptatibus ullam culpa cumque tempore
        voluptas error repellat delectus? Reprehenderit rem ipsam tempore
        nostrum ipsum. Molestiae?
      </p>
    </div>
  )
}
