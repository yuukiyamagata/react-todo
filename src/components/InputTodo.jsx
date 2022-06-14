export const InputTodos = (props) => {
  const style = {
    backgroundColor: '#c1ffff',
    width: '400px',
    height: '30px',
    borderRadius: '8px',
    padding: '8px',
    margin: '8px',
  }
  const { todoText, onClick, onChange } = props
  return (
    <div style={ style }>
    <input
      type="text"
      placeholder='Todoを追加'
      value={ todoText }
      onChange={ onChange }/>
    <button onClick={ onClick }>追加</button>
  </div>
  )
}