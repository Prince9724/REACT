import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../feature/todoSlice.js'
const store = configureStore({
   reducer:{
     tasks:todoReducer // yha pr key ka naam kuch bhi rkh skte hai 
   },
})
export default store