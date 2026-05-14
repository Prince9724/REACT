import TaskReducer from '../feature/TaskSlice.js'
import { configureStore } from '@reduxjs/toolkit'
 const store =configureStore({
    reducer:{
        task:TaskReducer, 
    },
 });
 export default store; 