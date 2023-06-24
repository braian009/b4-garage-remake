import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice";
import productsReducer from "./productsSlice";
import {
  persistCombineReducers,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistCombineReducers(persistConfig, {
  products: productsReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
