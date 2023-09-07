import React from 'react'
import Tasks from './Tasks'
import Button from './Button'

export default function App () {
  return (
    <div>
      <Button permission='ADD_TASK' style={{ color: 'green' }}>
        Add task
      </Button>
      <Tasks permission='VIEW_TASK_LIST' />
    </div>
  )
}
