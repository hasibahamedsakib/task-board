import { createApi } from "@reduxjs/toolkit/query";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: (priority) => `/tasks?priority=${priority}`,
    }),
  }),
});

export const { useGetTasksQuery } = api;
