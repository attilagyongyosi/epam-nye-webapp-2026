// UNUSED: Can replace RTK Query (todos.api.js),
// if you use slice/thunks instead of RTK Query, make sure to update store and ProfilePage as well.
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosFailure,
} from './todos.slice';

export const fetchTodos = (userId) => async (dispatch) => {
  dispatch(fetchTodosStart());
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}`,
    );
    const data = await res.json();
    dispatch(fetchTodosSuccess(data.slice(0, 5))); // Limit to 5 todos
  } catch (err) {
    dispatch(fetchTodosFailure(err.toString()));
  }
};

export const fetchTodosThunk = createAsyncThunk(
  'todos/fetchTodos',
  async (userId, thunkAPI) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}`,
    );
    const data = await response.json();
    return data.slice(0, 5); // Limit to 5 todos
  },
);
