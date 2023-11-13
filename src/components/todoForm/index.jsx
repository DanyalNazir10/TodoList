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

  const addTodoHandler = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    
    if (name.trim() !== "") {
      dispatch(addTodo({name: name, completed: false}));
    }
    e.target[0].value = "";
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
          placeholder="Input task name and then enter to add"
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
