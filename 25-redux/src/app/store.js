import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/CounterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
