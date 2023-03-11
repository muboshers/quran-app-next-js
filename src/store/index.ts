import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../api";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "./cart-slice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
  devTools: true,
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export { store };
