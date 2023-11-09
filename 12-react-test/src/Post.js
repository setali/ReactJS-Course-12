import React, { useEffect, useState } from 'react'

export default function Post () {
  const [post, setPost] = useState({})

  useEffect(() => {
    fetch('https://jsonplaceholder.ir/posts/1')
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])

  return (
    <div>
      <h1>Post item</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}
