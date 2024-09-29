import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.1.47:3000" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/category`,
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
