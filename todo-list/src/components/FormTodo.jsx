import { useState } from "react";

export default function FormTodo({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem) return;
    addTodo(newItem);
    setNewItem("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="item">Add Item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
      </div>
      <button>Add</button>
    </form>
  );
}
