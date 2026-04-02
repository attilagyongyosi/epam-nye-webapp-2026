// UNUSED: Can replace RTK Query (todos.api.js),
// if you use slice/thunks instead of RTK Query, make sure to update store and ProfilePage as well.
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getTodosByUser: builder.query({
      query: (userId) => `todos?userId=${userId}`,
      transformResponse: async (response) => {
        await new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5s artifical delay for demo purposes
        return response.slice(0, Math.random() > 0.5 ? 0 : 10); // Limit to 0 or 10 todos randomly for demo purposes
      },
    }),
  }),
});

export const { useGetTodosByUserQuery } = todosApi;
