import "./styles/SCSS/main.css";
import TodoForm from "../src/containers/todoFormContainer";
import { TodoActions } from "../src/utils/enums";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: TodoActions.REQUEST_GET_TODOS });
  }, []);

  return (
    <>
      <div className="container">
        <h1>My Todo</h1>

        <TodoForm className="todoListComponent" />

        <hr className="formDivider" />
      </div>
    </>
  );
}

export default App;
