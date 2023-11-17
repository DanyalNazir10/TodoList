import TodoList from "../../../src/containers/todoListContainer";

export const TodoForm = ({todos, addTodoHandler }) => {

  const addTodoHandlerWrapper = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    if (name.trim() !== "") {
      addTodoHandler({name: name, completed: false});
    }
    e.target[0].value = "";
  };
  return (
    <>
      <form onSubmit={addTodoHandlerWrapper}>
        <input
          type="text"
          name="addTodoItem"
          id="inputTodo"
          placeholder="Input task name and then enter to add"
        />
      </form>
      {todos? (todos.map((todo) => {
        return (
          <TodoList
            key={todo._id}
            todo={todo}
          />
        );
      })) : <div style={{marginTop: "15px"}}>No Todos yet</div>}
    </>
  );
};
