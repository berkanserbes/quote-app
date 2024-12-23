import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getStorageItem } from "../../utils/helpers/tokenHelper";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_API_URL,
    prepareHeaders: async (headers) => {
      const token = await getStorageItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/category`,
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
