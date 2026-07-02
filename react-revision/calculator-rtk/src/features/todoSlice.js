import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name:"counter",
    initialState:{
        count:0,
    },
    reducer:{
        increament:(state)=>{
            state.count++;
        },
        decreament:(state)=>{
            state.count--;
        }
    }
})