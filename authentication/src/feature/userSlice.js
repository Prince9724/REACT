import {createSlice , createAsyncThunk}from "@reduxjs/toolkit"
import axios from 'axios'

export const addUser = createAsyncThunk("add/user", async(user)=>{
     const res = await axios.post("http://localhost:3000/users",user);
     return res.data;   
}) 
export const getUser = createAsyncThunk("get/user", async () => {
    const res = await axios.get("http://localhost:3000/users");
    return res.data;
});

const userSlice = createSlice({
     name: "user",
    initialState: {
        users: [],
        error: null,
        isloading: true
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(addUser.fulfilled,(state,action)=>{
            state.isloading="successfull..."
            state.users.unshift(action.payload)
        })
        .addCase(addUser.pending ,(state,action)=>{
            state.isloading="pending.."
        })
        .addCase(addUser.rejected,()=>{
            state.isloading = action.error.message
        } )
        .addCase(getUser.fulfilled,(state,action)=>{
            state.isloading="successfull..."
            state.users = action.payload
        })
        .addCase(getUser.pending,(state,action)=>{
            state.isloading="pending.."
        })
        .addCase(getUser.rejected,()=>{
            state.isloading = action.error.message
        } )
    }
})
export default userSlice.reducer