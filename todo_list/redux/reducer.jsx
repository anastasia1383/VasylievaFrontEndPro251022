import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",

  initialState,

  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },

    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },

});

export const { 
  addTodos, 
  removeTodos,
  completeTodos 
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;