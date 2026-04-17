import {configureStore} from '@reduxjs/toolkit'
import todoReducer from "../feature/todoSlice.js"//naame apne aap se likha hai because vaha pr default export kiya hai 
 const store = configureStore({
    reducer:{
        todo : todoReducer// yha pr todo nam ki key pr todoslice me se reducer ko import kiya hai 
    }
 })
 export default store;