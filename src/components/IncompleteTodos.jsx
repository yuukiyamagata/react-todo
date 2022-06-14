export const IncompleteTodos = props => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div>
      <div className='incomplete-area'>
        <p className='title'>未完了のTodo</p>

            {incompleteTodos.map((todo, index) => {
              return(
                <ul>
                  <li >
                    <div className='list-row' key={ todo }>
                    <p>
                      { todo }
                    </p>
                    <button onClick={() => {onClickComplete(index)}}>完了</button>
                    <button onClick={() => {onClickDelete(index)}}>削除</button>
                  </div>
                </li>
              </ul>
              )
            })}

      </div>
      </div>
  )
}