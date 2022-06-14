import React, { useState } from 'react';
import "./App.css"
import { InputTodos } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

export const App = () => {
  console.log('parent re-rendering')
  const [todoText,setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState([])

  const onChangeTodoText = event => setTodoText(event.target.value);

  const [completeTodos, setCompleteTodos] = useState([]);

  const onClickAdd = () => {
    if(todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  }

  const onClickDelete = index => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  // 関数の共通化
  // 識別子 => if文による条件分岐
  // コールバック関数

  const onClickComplete = index => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos)
  }

  const onClickBack = index => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  }
  return (
  <div>
    <>
    <InputTodos
      onChange={ onChangeTodoText }
      onClick={ onClickAdd }
      todoText={ todoText }
    />
    { incompleteTodos.length >= 5 &&
    <p style={{ color: 'red'}}>
      登録できるTodo5個までだよ。消化しろ〜
    </p>}
    <IncompleteTodos
      incompleteTodos= { incompleteTodos }
      onClickComplete = { onClickComplete }
      onClickDelete = { onClickDelete }
      key={ incompleteTodos }
    />
    <CompleteTodos
    completeTodos = { completeTodos }
    onClickBack = { onClickBack }
    />

    </>
  </div>
  );
}