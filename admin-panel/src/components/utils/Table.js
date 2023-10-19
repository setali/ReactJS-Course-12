import React, { useMemo } from 'react'
import { Table as AntTable } from 'antd'

export default function Table ({ columns, data, rowKey = 'id' }) {
  const newColumns = useMemo(() => {
    return columns.map(column => ({
      dataIndex: column.Key,
      ...column
    }))
  }, [columns])

  return (
    <div>
      <AntTable columns={newColumns} dataSource={data} rowKey={rowKey} />
    </div>
  )
}
