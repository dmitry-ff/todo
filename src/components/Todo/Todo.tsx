import React, { ChangeEvent, FormEvent, useState } from 'react'
import { IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';
type Tools = {
  complete: boolean,
}
const List = styled.ul`
  padding:0;
  margin:0 auto;
  width:600px;
  margin-top:20px;
  `
const ListItem = styled.li`
text-decoration:${(props: Tools) => props.complete ? 'none' : 'line-through'};
list-style-type: none;
display: flex;
justify-content: space-between;
aligh-content: center;
  & button{
  visibility: hidden;
}
  &:hover{
  cursor: pointer;
  background-color: #fafafa;
}
  &:hover button{

  visibility: visible;
}
`
const Item = styled.span`
align-self: center;
`
const Form = styled.form`
width: 600px;
margin: auto;
`
function Todo() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue !== '') {
      setTodoList((list) => [...list, inputValue]);
      setInputValue('');
    }
  }

  const handleDeleteButton = (index: number) => {
    setTodoList(prev => {
      prev.splice(index, 1);
      return prev.slice();
    })
  }

  return (
    <>
      <Form action=""
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          label="Todo"
          id="fullWidth"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </Form>
      <List>
        {todoList.map((item, index) =>
          <ListItem
            complete={false}
            key={index}
          >
            <Item>{item}</Item>
            <IconButton
              onClick={() => handleDeleteButton(index)}
              aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        )}
      </List>

    </>
  )
}

export default Todo