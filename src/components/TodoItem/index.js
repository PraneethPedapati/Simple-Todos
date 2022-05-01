import './index.css'

const TodoItem = props => {
  const {todoList, onDelete} = props
  const {title, id} = todoList
  console.log(id)

  const deleteTodo = () => {
    onDelete(id)
  }

  return (
    <li className="todoItem">
      <p>{title}</p>
      <button type="button" className="button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
