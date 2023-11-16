import { call, put, takeEvery } from "redux-saga/effects";
import { getTodosSuccess } from "../src/features/todo/todoSlice";
import axios from "axios";


function* workGetTodosFetch() {
  try {
    const todos = yield call(() =>
      axios.get("/api/todos").then((res) => res.data.todos)
    );

    yield put(getTodosSuccess(todos));
  } catch (error) {
    console.error("Error updating todo:", error);
  }
}

function* todoSaga() {
  yield takeEvery("todos/getTodosFetch", workGetTodosFetch);
}

export default todoSaga;
