import { createSlice, nanoid } from "@reduxjs/toolkit";

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
    getTodosFetch: (state) => {
      state.isLoading = true;    
    },
    getTodosSuccess: (state, action) => {
        state.todos = action.payload;
        state.isLoading =  false;
    }
  },
});

export const { addTodo, deleteTodo, updateTodo, getTodosFetch, getTodosSuccess } = todoSlice.actions;
export default todoSlice.reducer;
