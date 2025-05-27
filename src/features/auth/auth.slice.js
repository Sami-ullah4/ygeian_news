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
  reducers: {},
 extraReducers: (builder) => {
  builder
    .addCase(register.pending, (state) => {
      state.isRegisterLoading = true;
      state.isRegisterFailed = false;
      state.isRegisterSuccess = false;
    })
    .addCase(register.fulfilled, (state, action) => {
      state.isRegisterLoading = false;
      state.isRegisterSuccess = true;
      state.user = action.payload;
    })
    .addCase(register.rejected, (state, action) => {
      state.isRegisterLoading = false;
      state.isRegisterFailed = true;
      state.error = action.payload || action.error;
    });
}

});

export default authSlice.reducer;
