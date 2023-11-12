import React, { useState } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  updateTodo,
} from "../../../src/features/todo/todoSlice";
import { TodoList } from "../../../src/components/todoList";

export const TodoForm = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (name.trim() !== "") {
      dispatch(addTodo({name: name, completed: false}));
      setName("");
    }
  };

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const updateTodoHandler = (id, newName, completed) => {
    dispatch(updateTodo({id, name: newName, completed}));
  };

  return (
    <>
      <form onSubmit={addTodoHandler}>
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
            key={todo.id}
            todo={todo}
            deleteTodoHandler={deleteTodoHandler}
            updateTodoHandler={updateTodoHandler}
          />
        );
      })}
    </>
  );
};
