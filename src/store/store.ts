import { configureStore } from "@reduxjs/toolkit";
import orderReducer from './slices/orderSlice'

export const store = configureStore({
  reducer: {
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
