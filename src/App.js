import "./styles/SCSS/main.css";
import TodoForm from "../src/containers/todoFormContainer";
import { getTodosFetch } from "./features/todo/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodosFetch());
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
