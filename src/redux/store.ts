import { configureStore } from "@reduxjs/toolkit";
import informationReducer from "./informationSlice";

export const store = configureStore({
  reducer: {
    information: informationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Store = typeof store;
