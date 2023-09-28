import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import request from '../../tools/request'
import { useParams } from 'react-router-dom'

export default function Detail () {
  const theme = useContext(ThemeContext)

  const [post, setPost] = useState({})

  const { id } = useParams()

  useEffect(() => {
    request(`/posts/${id}`).then(({ data }) => setPost(data))
  }, [])

  return (
    <div className='box' style={theme}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}
