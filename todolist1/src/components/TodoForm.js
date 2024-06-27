import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = event =>{
        event.preventDefault()
        addTodo(value)
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' placeholder='what is the task?'
       onChange={(event) => setValue(event.target.value)} />

      <button type='submit' className='todo-btn'>Add task</button>
    </form>
  )
}
