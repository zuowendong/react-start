import { useState } from "react";
import FormTodo from "./components/FormTodo";
import TodoList from "./components/TodoList";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(title) {
    setTodoList((current) => {
      return [
        ...current,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
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
      <FormTodo addTodo={addTodo}></FormTodo>
      <h1>Todo List</h1>
      <TodoList
        todoList={todoList}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      ></TodoList>
    </>
  );
}
