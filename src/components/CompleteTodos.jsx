export const CompleteTodos  = props => {
  const { onClickBack, completeTodos } = props;
  return (
    <div>
    <div className='complete-area'>
      <p className='title'>完了のTodo</p>


          {completeTodos.map((todo, index) => {
            return(
              <ul>
                <li key={ todo }>
                  <div className='list-row'>
                  <p>{ todo }</p>
                  <button onClick={() => {onClickBack(index)}}>戻す</button>
                  </div>
                </li>
              </ul>
            )
          })}

      </div>
    </div>
  )
}