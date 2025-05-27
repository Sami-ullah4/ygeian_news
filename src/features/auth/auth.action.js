import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerApi } from "./api";

export const register = createAsyncThunk(
  "auth/register",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await registerApi(payload);
      console.log("Register API response:", res.data);

      return res.data;
    } catch (error) {
      console.log("REGISTRATION ERROR:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
