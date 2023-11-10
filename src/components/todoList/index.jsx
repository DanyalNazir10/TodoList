import React, {useState} from "react";

export default function TodoList ({todo}) {

    return(
       
        <div className="todoList">
        <div className="todoListItem todoListItemContent">
          <span>
            <input type="checkbox" id="todoName"></input>
            <label htmlFor="todoName" id="todoCheckBox">
              {todo.name}
            </label>
          </span>

          <span className="todoButtons">
            <button className="todoButtonItem editButton">
              {" "}
              <i
                className="fa-solid fa-pen-to-square"
                style={{ color: "#0c0d0d" }}
              ></i>
            </button>
            <button className="todoButtonItem deleteButton">
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
  };
  