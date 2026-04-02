// UNUSED: Can replace RTK Query (todos.api.js),
// if you use slice/thunks instead of RTK Query, make sure to update store and ProfilePage as well.
import { createSlice } from '@reduxjs/toolkit';
import { fetchTodosThunk } from './todos.thunks.js';

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: INITIAL_STATE,
  reducers: {
    fetchTodosStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTodosSuccess(state, action) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchTodosFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodosThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodosThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { fetchTodosStart, fetchTodosSuccess, fetchTodosFailure } =
  todosSlice.actions;

export default todosSlice.reducer;
