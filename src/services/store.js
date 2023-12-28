import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store = configureStore({
  reducer: { [articleApi.reducerPath]: articleApi.reducer },
  moddleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(articleApi.middleware),
});
