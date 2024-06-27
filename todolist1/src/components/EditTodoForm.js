import React, { useState } from 'react'

export const EditTodoForm = ({editTodo , task}) => {
    const [value, setValue] = useState("")

    const handleSubmit = event =>{
        event.preventDefault()
        editTodo(value , task.id)
    }

  return (
    <form className='EditTodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' placeholder='New Tesk?'
       onChange={(event) => setValue(event.target.value)} />

      <button type='submit' className='todo-btn'>Update task</button>
    </form>
  )
}