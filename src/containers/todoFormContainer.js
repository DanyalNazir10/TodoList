import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../src/features/todo/todoSlice";
import { TodoForm } from "../../src/components/todoForm";

const mapStateToProp = (state) => ({
  todos: state.todos,
});
const mapDispatchToProp = (dispatch) => ({
  addTodoHandler: (name, completed) => dispatch(addTodo(name, completed)),
});

const TodoFormContainer = connect(mapStateToProp, mapDispatchToProp)(TodoForm);
export default TodoFormContainer;
