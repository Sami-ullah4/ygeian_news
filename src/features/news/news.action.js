import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsApi } from "./api";

export const getNews = createAsyncThunk("news/all", async (_, { rejectWithValue }) => {
  try {
    const res = await getNewsApi();
    console.log(res)
    return res.data; 
    
  } catch (error) {
    return rejectWithValue(
      error.response ? error.response.data : error.message
    );
  }
});
