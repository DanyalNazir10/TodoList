import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      return {
        ...state,
        todos: [...state.todos, {id: nanoid(), createdAt: new Date(), ...action.payload}],
      };
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
    updateTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.payload.id
            ? {
                ...todo,
                ...action.payload,
              }
            : todo;
        }),
      };
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
