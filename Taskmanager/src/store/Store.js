import TaskReducer from '../feature/TaskSlice.js'//ye default export hu ahai isliye iska naam yha pr change kiya hai.  
import { configureStore } from '@reduxjs/toolkit'
 const store =configureStore({
    reducer:{
        task:TaskReducer, 
    },
 });
 export default store;
 
 






 