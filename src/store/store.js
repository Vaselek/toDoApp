import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";

import tasks from './tasks';

const reducer = combineReducers({
  tasks
});

const store = configureStore({
  reducer,
});

export default store;