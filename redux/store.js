import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoryApi } from "./services/category.service";
import { authApi } from "./services/auth.service";
import { userApi } from "./services/user.service";

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      categoryApi.middleware,
      userApi.middleware
    ),
});

setupListeners(store.dispatch);
