import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react'
import * as Styled from './TodoForm.styled'

type TProps = {
  id: number,
  text: string
}

function TodoForm(props: { onSubmit: ({ id, text }: TProps) => void }) {
  const [input, setInput] = useState('')



  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })
    setInput('')
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  return (
    <Styled.Form
      action=""
      onSubmit={handleSubmit}
    >
      <Styled.Input
        autoComplete='off'
        type="text"
        name="text"
        id=""
        placeholder='add a todo'
        value={input}
        onChange={handleChange}
      />
      <Styled.Button>Add todo</Styled.Button>
    </Styled.Form>
  )
}

export default TodoForm

