import userReducer from "./slice/userSlice";
import {configureStore} from "@reduxjs/toolkit";

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
