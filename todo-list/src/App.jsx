import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!e.target.value) return;

    setTodoList((current) => {
      return [
        ...current,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false,
        },
      ];
    });

    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodoList((current) => {
      return current.map((todo) => {
        if (todo.id === id) return { ...todo, completed };
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodoList((current) => {
      return current.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Add Item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        <button>Add</button>
      </form>

      <h1>Todo List</h1>

      {todoList.length === 0 && <div>no todo list</div>}

      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.value)}
                />
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
