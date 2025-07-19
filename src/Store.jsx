import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CreateSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./AuthSlice";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);
const store = configureStore({
  reducer: {
    myCart: persistedReducer,
     auth: authReducer,
  },
});

export default store;
export const persistor = persistStore(store);