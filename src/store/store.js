import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
console.log(authSlice);
export default configureStore({
  reducer: {
    auth: authSlice,
  },
});

// export default store;
