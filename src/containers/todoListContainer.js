import { connect } from "react-redux";
import { deleteTodo, updateTodo } from "../../src/features/todo/todoSlice";
import { TodoList } from "../../src/components/todoList";

const mapDispatchToProps = (dispatch) => ({
  deleteTodoHandler: (id) => dispatch(deleteTodo(id)),
  updateTodoHandler: (id, newName, completed) =>
    dispatch(updateTodo({ id, name: newName, completed })),
});

const TodoListContainer = connect(null, mapDispatchToProps)(TodoList);
export default TodoListContainer;
