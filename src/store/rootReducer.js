
import { combineReducers } from "@reduxjs/toolkit";
import  newsSlicer  from "../features/news/news.slice";
import authSlice  from "../features/auth/auth.slice";

const rootReducer = combineReducers({
  news: newsSlicer,
  auth: authSlice,
});

export default rootReducer;
