import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import carsReducer from "./cars/slice";
import filtersReducer from "./filters/slice";
import favoritesReducer from "./favorites/slice";

const authPersistConfig = {
  key: "favorites",
  storage,
};

const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favorites: persistReducer(authPersistConfig, favoritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
