import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'

export default function Home () {
  const theme = useContext(ThemeContext)
  const { isLoggedIn, user } = useContext(UserContext)

  return (
    <div className='box' style={theme}>
      <h2>HomePage</h2>
      {isLoggedIn && `Welcome ${user.name}`}
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim maiores
        totam aperiam nulla, architecto voluptatibus ullam culpa cumque tempore
        voluptas error repellat delectus? Reprehenderit rem ipsam tempore
        nostrum ipsum. Molestiae?
      </p>
    </div>
  )
}
