import React, { useState } from "react";

export const TodoList = ({ todo, deleteTodo, updateTodo }) => {
  const [checked, setChecked] = useState(true);
  const [newName, setNewName] = useState(todo.name);
  const [editing, setEditing] = useState(false);

  const toggleCheckBox = () => {
    setChecked((prevState) => !prevState);
    todo.completed = checked;
  };

  const editTodo = (e) => {
    if (e.key === "Enter") {
      updateTodo(todo.id, newName);
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
              {checked ? <span>{todo.name}</span> : <del>{todo.name}</del>}
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
            onClick={() => deleteTodo(todo.id)}
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
