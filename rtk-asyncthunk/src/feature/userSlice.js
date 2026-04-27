import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'//createSlice aur createAsyncThunk ko @reduxjs/toolkit se import kiya hai 
import axios from 'axios'
//ek fncyion bnaayenge jisme ham createAsyncThunk ka kaam krenge. 
export const fetchUser = createAsyncThunk("user/fetch", async () => { //createAsyncThunk ke ander ek string rkhni hai jo unic ho uske baad 
    //  async aur call back function uske baad apna axios se data ko laana aur us reurn kr dena 
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(res.data.length);
    console.log("hello....");

    return res.data;
})

const userSlice = createSlice({//

    name: "user",
    initialState: {

        user: [],
        status: "idle", // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchUser.pending, (state) => {
            state.status = "loading"
        }),
            builder.addCase(fetchUser.fulfilled, (state, action) => {
                state.user = action.payload
               state.status = "succeeded"
            }),
            builder.addCase(fetchUser.rejected, (state, action) => {
                state.error = action.error.message
                state.status = "failed"
            })
    }

});
export default userSlice.reducer;
