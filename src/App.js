import "./styles/SCSS/main.css";
import {TodoForm} from "../src/components/todoForm";

function App() {
  return (
    <>
      <div className="container">
        <h1>My Todo</h1>

        <TodoForm className = "todoListComponent"/>
        
        <hr className="formDivider" />
      </div>
    </>
  );
}

export default App;
