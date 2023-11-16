import { connect } from "react-redux";
import { TodoList } from "../../src/components/todoList";
import { TodoActions } from "../../src/utils/enums";

const mapDispatchToProps = (dispatch) => ({
  deleteTodoHandler: (id) => dispatch({type: TodoActions.REQUEST_DELETE_TODO, payload: id}),
  updateTodoHandler: (id, newName, completed) =>
    dispatch({type: TodoActions.REQUEST_UPDATE_TODO, payload: { id, name: newName, completed }}),
});

const TodoListContainer = connect(null, mapDispatchToProps)(TodoList);
export default TodoListContainer;
