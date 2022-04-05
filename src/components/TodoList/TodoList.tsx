import React, { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm';

type TTodos = {
  text: string,
}
function SetTodo() {
  const [todos, setTodos] = useState<TTodos[]>([]);

  const addTodo = (todo: { text: string }) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos)
    console.log(...todos)
  }

  return (
    <div>
      <h1>What`s the Plan for today</h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  )
}

export default SetTodo