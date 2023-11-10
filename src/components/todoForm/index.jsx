import React, { useState } from "react";
import TodoList from "../../../src/components/todoList";

export default function TodoForm() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), name, createdAt: new Date(), completed: false },
      ]);
      setName("");
    }
  };

  return (
    <>
      <form onSubmit={addTodo}>
        <input
          type="text"
          name="addTodoItem"
          id="inputTodo"
          value={name}
          placeholder="Input task name and then enter to add"
          onChange={(e) => setName(e.target.value)}
        />
      </form>

      {todos.map((todo) => {
        return <TodoList todo={todo} />;
      })}
    </>
  );
}
