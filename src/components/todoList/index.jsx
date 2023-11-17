import React, { useState } from "react";

export const TodoList = ({ todo, deleteTodoHandler, updateTodoHandler }) => {

  const [checked, setChecked] = useState(!todo.completed);
  const [newName, setNewName] = useState(todo.name);
  const [editing, setEditing] = useState(false);

  const toggleCheckBox = () => {
    setChecked((prevState) => !prevState);
    updateTodoHandler(todo._id, newName, checked);
  };

  const editTodo = (e) => {
    if (e.key === "Enter") {
      updateTodoHandler(todo._id, newName);
      setEditing(false);
    }
  };
  return (
    <div className="todoList">
      <div className="todoListItem todoListItemContent">
        <span>
          <input
            type="checkbox"
            id="todoName"
            onChange={toggleCheckBox}
            checked = {todo.completed}
          ></input>

          {editing ? (
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyPress={editTodo}
            />
          ) : (
            <label htmlFor="todoName" id="todoCheckBox">
            {!todo.completed ? (
              <span>{todo?.name ?? todo?.todo }</span>
            ) : (
              <del>{todo.name}</del>
            )}
          </label>
          )}
        </span>

        <span className="todoButtons">
          <button
            className="todoButtonItem editButton"
            onClick={() => setEditing(true)}
          >
            {" "}
            <i
              className="fa-solid fa-pen-to-square"
              style={{ color: "#0c0d0d" }}
            ></i>
          </button>
          <button
            className="todoButtonItem deleteButton"
            onClick={() => deleteTodoHandler(todo._id)}
          >
            {" "}
            <i
              className="fa-solid fa-trash-can"
              style={{ color: "#0c0d0d" }}
            ></i>
          </button>
        </span>
      </div>

      <hr className="todoListItem todoDivider" />
    </div>
  );
}
