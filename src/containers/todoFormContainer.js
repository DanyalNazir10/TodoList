import React from "react";
import { connect } from "react-redux";
import { TodoForm } from "../../src/components/todoForm";
import { TodoActions } from "../../src/utils/enums";

const mapStateToProp = (state) => ({
  todos: state.todos,
});
const mapDispatchToProp = (dispatch) => ({
  addTodoHandler: (todo) => dispatch({type: TodoActions.REQUEST_ADD_TODO, payload: todo}),
});

const TodoFormContainer = connect(mapStateToProp, mapDispatchToProp)(TodoForm);
export default TodoFormContainer;
