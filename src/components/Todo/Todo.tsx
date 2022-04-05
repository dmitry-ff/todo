import React, { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'

type TEdit = {
  id: null | number,
  value: string
}

function Todo() {
  const [edit, setEdit] = useState<TEdit>({
    id: null,
    value: ''
  })


  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row' key={index}}
  ))
}

export default Todo