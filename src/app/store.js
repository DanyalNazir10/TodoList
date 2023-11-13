import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import todoReducer from "../../src/features/todo/todoSlice";
import todoSaga from "../../src/sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: todoReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(todoSaga);
