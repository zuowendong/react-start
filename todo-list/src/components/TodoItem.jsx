function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.value)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
