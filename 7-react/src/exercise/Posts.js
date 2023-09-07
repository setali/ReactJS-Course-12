import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from './Table'

const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Title', dataIndex: 'title', key: 'title' }
]

export default function Posts () {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios('https://jsonplaceholder.ir/posts').then(({ data }) => setPosts(data))
  }, [])
  return (
    <div>
      <Table columns={columns} data={posts} />
    </div>
  )
}
