import React, { useState } from 'react';
import "./App.css"

export const App = () => {
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
    <div className='input-area'>
      <input type="text" placeholder='Todoを追加' value={ todoText } onChange={ onChangeTodoText }/>
      <button onClick={ onClickAdd }>追加</button>
    </div>

    <div className='incomplete-area'>
      <p className='title'>未完了のTodo</p>
      <ul>
        <li>
          {incompleteTodos.map((todo, index) => {
            return(
              <div key={todo} className='list-row'>
              <p>
                { todo }
              </p>
              <button onClick={() => {onClickComplete(index)}}>完了</button>
              <button onClick={() => {onClickDelete(index)}}>削除</button>
            </div>
            )
          })}
        </li>
      </ul>
    </div>

    <div className='complete-area'>
      <p className='title'>完了のTodo</p>
      <ul>
        <li>
          {completeTodos.map((todo, index) => {
            return(
              <div className='list-row'>
              <p>{ todo }</p>
              <button onClick={() => {onClickBack(index)}}>戻す</button>
              </div>
            )
          })}
        </li>
      </ul>
    </div>
    </>
  </div>
  );
}