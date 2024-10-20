import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/category`,
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
