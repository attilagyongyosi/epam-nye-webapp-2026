import { configureStore, combineReducers } from '@reduxjs/toolkit';
import employeesReducer from './employees/employees.slice.js';
import authReducer from './auth/auth.slice.js';
import { todosApi } from './todos/todos.api.js';

export const store = configureStore({
  reducer: combineReducers({
    employees: employeesReducer,
    auth: authReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  }),
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(todosApi.middleware);
  },
});
