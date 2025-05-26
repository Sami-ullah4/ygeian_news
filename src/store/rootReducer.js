import { combineReducers } from "@reduxjs/toolkit";
import  newsSlicer  from "../features/news/news.slice";

const rootReducer = combineReducers({
  news: newsSlicer,
});

export default rootReducer;
