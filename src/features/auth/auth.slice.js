import { createSlice } from "@reduxjs/toolkit";
import { register } from "./auth.action";

const initialState = {
  user: {},
  isAuthenticated: false,
  isRegisterSuccess: false,
  isRegisterLoading: false,
  isRegisterFailed: false,
  error: {},
  isLoginSuccess: false,
  isLoginLoading: false,
  isLoginFailed: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.isRegisterSuccess = false;
      state.isRegisterFailed = false;
      state.isRegisterLoading = false;
      state.isLoginSuccess = false;
      state.isLoginFailed = false;
      state.isLoginLoading = false;
      state.error = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isRegisterLoading = true;
      state.isRegisterFailed = false;
      state.isRegisterSuccess = false;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isRegisterLoading = false;
      state.isRegisterSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isRegisterLoading = false;
      state.isRegisterFailed = true;
      state.isRegisterSuccess = false;
      state.error = action.payload || action.error;
    });
    /////////////////login case///////////
    // builder.addCase(login.pending, (state) => {
    //   state.isLoginLoading = true;
    //   state.isLoginSuccess = false;
    //   state.isLoginFailed = false;
    // });

    // builder.addCase(login.fulfilled, (state, action) => {
    //   state.isLoginLoading = false;
    //   state.isLoginSuccess = true;
    //   state.isLoginFailed = false;
    //   state.user = action.payload;
    // });

    // builder.addCase(login.rejected, (state, action) => {
    //   state.isLoginLoading = false;
    //   state.isLoginSuccess = false;
    //   state.isLoginFailed = true;
    //   state.error = action.error.message;
    // });
  },
});

export default authSlice.reducer;
export const { resetAuthState } = authSlice.actions;
