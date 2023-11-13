import { call, put, takeEvery } from "redux-saga/effects";
import { getTodosSuccess } from "../src/features/todo/todoSlice";

function* workGetTodosFetch() {
  try {
    const todos = yield call(() =>
      fetch("https://dummyjson.com/todos").then((res) => res.json())
    );

    yield put(getTodosSuccess(todos.todos.slice(0,5)));
  } catch (error) {
    console.error("Error updating todo:", error);
  }
}

function* todoSaga() {
  yield takeEvery("todos/getTodosFetch", workGetTodosFetch);
}

export default todoSaga;
