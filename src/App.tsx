import React, { useRef, useState } from 'react'
import styled from '@emotion/styled';
import { setConstantValue } from 'typescript';

const Wrapper = styled.div`
  display:flex;
  max-width:400;
  width:400px;
  flex-direction:column;  
  margin:auto;
  background-color:#bdd1e6;
  padding:20px;
  font-family:  Arial, Helvetica, sans-serif;
`;

const Input = styled.input`
  border:none;
  width:400px;
  padding:5px 10px;
  align-self:center;
  outline:none;
  background-color:transparent;
  box-shadow: 0 2px 0 0 #7a8abc;
  font-size:1.25em;
  transition:.4s;
  &:focus{
    box-shadow: 0 2px 0 0 #5368a7;
  }
`;

const UnorderList = styled.ul`
padding:0;  
& li{
    list-style:none;
    & input{
      position:absolute;
      left:-9999999px
    }
  }
`
const Button = styled.button`
  width:100px;
  align-self:center;
  margin-top:30px;
  background-color:#4f72b0;
  border:none;
  color:#fff;
  padding:10px;
  border-radius:3px;
  &:active{
    background-color:#47659d;
  }
  &:hover{
    cursor:pointer;
  }
`


function App() {
  const [todo, setTodo] = useState(['Сделать туду-лист', 'Сделать его нормальным']);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <Wrapper>
        <form action=""
          onSubmit={(event: HTMLFormElement) => {

          }}
        >
          <UnorderList>
            {todo.map((item, index) => <li key={index}>
              <input type="checkbox" name="check" id={`check${index}`} />
              <label htmlFor={`check${index}`}>{item}</label>
            </li>)}
          </UnorderList>
          <Input autoComplete='none' ref={inputRef} />
          <input type='submit' onClick={() => {
            if (inputRef.current?.value !== '') {
              setTodo(array => [...array, inputRef.current!.value])
            }
          }}>Add</input>
        </form>
      </Wrapper>
    </>
  )
}

export default App