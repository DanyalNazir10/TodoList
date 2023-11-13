import React, { useState } from "react";
import { TodoList } from "../../../src/components/todoList";

export const TodoForm = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    const name = e.target[0].value;
    e.preventDefault();
    if (name.trim() !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), name, createdAt: new Date(), completed: false },
      ]);
      e.target[0].value = "";
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
          placeholder="Input task name and then enter to add"
        />
      </form>

      {todos.map((todo) => {
        return (
          <TodoList
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        );
      })}
    </>
  );
};
