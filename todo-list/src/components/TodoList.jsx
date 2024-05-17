import TodoItem from "./TodoItem";

export default function TodoList({ todoList, toggleTodo, deleteTodo }) {
  return (
    <>
      {todoList.length === 0 && <div>no todo list</div>}

      <ul>
        {todoList.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            ></TodoItem>
          );
        })}
      </ul>
    </>
  );
}
