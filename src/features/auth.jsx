import { createSlice } from "@reduxjs/toolkit";

// const authorised = JSON.parse(localStorage.getItem("authorised") || false);


// const initialState = {
//   login: "",
//   password: "",
//   authorised: authorised
// };
const initialState = {
  user: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  //   setLogin: (state, action) => {
  //     state.login = action.payload;
  //   },
  //   setPassword: (state, action) => {
  //     state.password = action.payload;
  //   },
  //   setAthorised: (state) => {
  //     if (state.login !== "admin" || state.password !== "12345") {
  //       throw new Error("NOT CORRECT USERNAME OR PASSWORD");
  // }

  //     state.authorised = true;
  //     localStorage.setItem("authorised", JSON.stringify(true));
  //   }
  setUser: (state, action) => {
    state.user = action.payload;
  }
  }
});

export const { actions } = authSlice;
export default authSlice.reducer;
