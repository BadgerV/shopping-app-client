import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializableCheck middleware
    }),
  reducer: rootReducer,
});
