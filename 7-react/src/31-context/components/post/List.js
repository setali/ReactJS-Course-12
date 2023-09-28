import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import request from '../../tools/request'
import { Link } from 'react-router-dom'

export default function List () {
  const theme = useContext(ThemeContext)

  const [posts, setPosts] = useState([])

  useEffect(() => {
    request('/posts').then(({ data }) => setPosts(data))
  }, [])

  return (
    <div className='box' style={theme}>
      <h2>Post List</h2>
      <ol>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
