import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  isLoading: false,
  reducers: {
    addTodo: (state, action) => {
      return {
        ...state,
        todos: [...state.todos, { ...action.payload }],
      };
    },
    deleteTodo: (state, action) => {
      return {
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };
    },
    updateTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo._id === action.payload._id
            ? {
                ...todo,
                ...action.payload,
              }
            : todo;
        }),
      };
    },
    addAllTodos: (state, action) => {
      state.todos = action.payload;
      state.isLoading = false;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, addAllTodos } = todoSlice.actions;
export default todoSlice.reducer;
