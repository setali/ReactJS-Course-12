import React from 'react'
import Button from './Button'
import ACL from './ACL'

const tasks = Array(10)
  .fill(0)
  .map((_, i) => i + 1)
  .map(id => ({ id, title: `Title ${id}` }))

function Tasks () {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <Button permission='EDIT_TASK' style={{ margin: '10px' }}>
              Edit
            </Button>
            <Button permission='DELETE_TASK'>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ACL(Tasks)
