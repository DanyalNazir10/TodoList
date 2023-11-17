import { call, put, takeEvery } from "redux-saga/effects";
import { TodoActions } from "./utils/enums";
import {
  addTodo,
  addAllTodos,
  deleteTodo,
  updateTodo,
} from "../src/features/todo/todoSlice";
import axios from "axios";

function* workGetTodos() {
  try {
    const todos = yield call(() =>
      axios
        .get("/api/todos")
        .then((res) => res.data)
        .catch((error) => console.log(error))
    );
    yield put(addAllTodos(todos));
  } catch (error) {
    console.error("Error fetching todo:", error);
  }
}

function* workAddTodo(action) {
  try {
    const todo = yield call(() =>
      axios
        .post("/api/todos", action.payload)
        .then((res) => res.data)
        .catch((error) => console.log(error))
    );
    yield put(addTodo(todo));
  } catch (error) {
    console.error("Error adding todo:", error);
  }
}

function* workDeleteTodo(action) {
  try {
    yield call(() =>
      axios
        .delete(`/api/todos/${action.payload}`)
        .catch((error) => console.log(error))
    );
    yield put(deleteTodo(action.payload));
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}

function* workUpdateTodo(action) {
  try {
    const updatedTodo = yield call(() =>
      axios
        .put(`/api/todos/${action.payload.id}`, action.payload)
        .then((res) => res.data)
        .catch((error) => console.log(error))
    );
    yield put(updateTodo(updatedTodo));
  } catch (error) {
    console.error("Error updating todo:", error);
  }
}

function* todoSaga() {
  yield takeEvery(TodoActions.REQUEST_GET_TODOS, workGetTodos);
  yield takeEvery(TodoActions.REQUEST_ADD_TODO, workAddTodo);
  yield takeEvery(TodoActions.REQUEST_DELETE_TODO, workDeleteTodo);
  yield takeEvery(TodoActions.REQUEST_UPDATE_TODO, workUpdateTodo);
}

export default todoSaga;
