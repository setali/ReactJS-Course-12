import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from './Table'

const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    render: (el, record) => {
      return `${el.city} ${el.street} ${record.phone}`
    }
  }
]

export default function Users () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios('https://jsonplaceholder.ir/users').then(({ data }) => setUsers(data))
  }, [])

  return (
    <div>
      <Table
        columns={columns}
        data={users}
        rowKey={record => `${record.email}-${record.username}`}
      />
    </div>
  )
}
