import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

// console.log(authSlice);
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
