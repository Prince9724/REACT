import {configureStore }from '@reduxjs/toolkit'
import userReducre from '../feature/userSlice.js'

const store = configureStore({
    reducer:{
        "authentication":userReducre
    }
})
export default store ;