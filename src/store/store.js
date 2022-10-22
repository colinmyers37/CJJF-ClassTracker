import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./authSlice";
import rootReducer from "./locationSlice";
// console.log(authSlice);
const store = configureStore({
  reducer: rootReducer,
});

export default store;
