import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getStorageItem } from "../../utils/helpers/tokenHelper";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_API_URL,
    prepareHeaders: async (headers) => {
      console.log("headers:", headers);
      const token = await getStorageItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => `/user/${id}`,
    }),
    getUserByEmail: builder.query({
      query: (email) => `/user/email/${email}`,
    }),
  }),
});

export const { useGetUserByIdQuery, useGetUserByEmailQuery } = userApi;
