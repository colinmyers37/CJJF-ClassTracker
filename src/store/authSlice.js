import { createSlice } from "@reduxjs/toolkit";

//INIT STATE AND TIMER //
const initialState = {
  token: "",
  userName: "",
  userId: "",
  isRegister: false,
};

let logoutTimer;

//TIME CALC //
const calculateRemainingTime = (exp) => {
  const currentTime = new Date().getTime();
  const expTime = exp;
  const remainingTime = expTime - currentTime;
  return remainingTime;
};

//LOCAL DATA HELP //
const getLocalData = () => {
  const storedToken = localStorage.getItem("token");
  const storedExp = localStorage.getItem("exp");
  const storedUserName = localStorage.getItem("userName");
  const storedUserId = localStorage.getItem("userId");

  const remainingTime = calculateRemainingTime(storedExp);

  if (remainingTime <= 1000 * 60 * 30) {
    localStorage.removeItem("token");
    localStorage.removeItem("exp");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
    userName: storedUserName,
    userId: storedUserId,
  };
};

const localData = getLocalData();

if (localData) {
  initialState.token = localData.token;
  initialState.userId = localData.userId;
  initialState.userName = localData.userName;
}

//* AUTH SLICE //
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.token += action.payload.token;
      state.userId += action.payload.userId;
      state.userName = action.payload.userName;
      const sessionExp = action.payload.sessionExp;
      localStorage.setItem("exp", sessionExp);
      localStorage.setItem("token", state.token);
      localStorage.setItem("userName", state.userName);
      localStorage.setItem("userId", state.userId);
      const remainingTime = calculateRemainingTime(sessionExp);
      logoutTimer = setTimeout(authSlice.caseReducers.logout, remainingTime);
    },
    logout(state) {
      state.token = "";
      state.userId = "";
      state.userName = "";
      localStorage.removeItem("exp");
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("userId");
      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }
    },
    setRegister(state, action) {
      state.isRegister = action.payload;
    },
    toggleRegister(state) {
      state.isRegister = !state.isRegister;
    },
  },
});
export const authActions = authSlice.actions;

export default authSlice.reducer;
// const authActions = authSlice.actions;
// console.log(authSlice);
// export default =  authSlice.reducer{
//   authActions,
//   authSlice,
// };
