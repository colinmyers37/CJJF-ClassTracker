import { createSlice } from "@reduxjs/toolkit";
const locationSlice = createSlice({
  name: "location",
  initialState: {
    location: ["Bangalore", "Hyderabad", "Delhi"],
  },
  reducers: {
    save: (state, param) => {
      const { payload } = param;
      state.location = [...state.location, payload];
      console.log("hello save works");
    },
    login: (state, action) => {
      console.log("login");
    },
  },
});
const { actions, reducer } = locationSlice;
export const { save, login } = actions;
export default reducer;
