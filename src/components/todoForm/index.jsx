import React, { useState } from "react";
import {TodoList} from "../../../src/components/todoList";

export const TodoForm = () => {
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

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newName) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, name: newName } : todo
      )
    );
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
        return (
          <TodoList
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        );
      })}
    </>
  );
}
