import React from 'react'
import Link from '../utils/Link'

export default function Menu () {
  return (
    <menu>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </menu>
  )
}
