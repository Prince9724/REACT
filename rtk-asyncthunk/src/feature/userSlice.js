import { creatSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const fetchUser = createAsyncThunk("user/fetch", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    return res.data;
})

const userSlice = creatSlice({
    name: "user",
    initialState: {
        user: [],
        status: "idle", // idle | loading | succeeded | failed
        error: null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUser.pending,(state)=>{
            state.status="Loading"
        }),
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
           state.user=action.payload 
            state.status="succesfull";
        }),
        builder.addCase(fetchUser.error,(state,action)=>{
            state.error = action.error.massage
            state.state="falled"
        })
    }

});
export default userSlice.reducers;
