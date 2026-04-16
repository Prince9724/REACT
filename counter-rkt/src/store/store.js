import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/Counter-Slice"
const store = configureStore({
    reducer:{
      counter:counterReducer
    }
})
export default store; 