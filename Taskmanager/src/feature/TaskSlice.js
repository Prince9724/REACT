import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'//reduxjs/toolkit se import hua hai 
import axios from 'axios'//axios npm se install kr ke import kiya hai 
import { TaskApi } from '../utils/Api.js' //taskApi ek api url hai jise api.js me default export kiya hai 
import Task from '../component/task.jsx'

export const postTask =
    createAsyncThunk("task/post",async (data) => {
        const res =await axios.post( TaskApi,data)
            return res.data//agar data sucesfull post ho rha hai yo res.data return ho jaayega. 
        })

export const fetchTask = createAsyncThunk("task/get", async () => { //ex variable hai jisko named export kiya hai aur ek unic naam bhi diya hai 
    //yha pr keval data get hoga api url se data get hoga   
    const res = await axios.get(TaskApi);
    return res.data; //agr succesful api se data get ho gya to yha se res.data return hoga
})
// export const postTask = createAsyncThunk("task/post", async (data) => { // postTask ko bhi named export kiya hai 
//     const res = await axios.post(TaskApi, {title:"hello"})
//     return res.data;
// })

export const updateTask = createAsyncThunk("task/put", async ({ data, id }) => {
    const res = await axios.put(TaskApi+task)
    return res.data
})
export const deleteTask = createAsyncThunk("task/delete", async ({ id }) => {
    const res = await axios.delete(`${TaskApi}/${id}`)
    return res.data;
})
const taskSLice = createSlice({
    name: "task",
    initialState: {
        tasks: [],
        isloading: false,
        error: null,
        message: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTask.pending, (state, action) => {
                state.isloading = "ruko jara sbr kro.. "
            })
            .addCase(fetchTask.fulfilled, (state, action) => {
                state.tasks = action.payload
                state.isloading = "Task added succesfull "
            })
            .addCase(fetchTask.rejected, (state, action) => {
                state.isloading = "failed"
                state.error = action.error;
            })
            .addCase(postTask.pending, (state, action) => {
                state.isloading = " loading..."
            })
            .addCase(postTask.fulfilled, (state, action) => {
                state.isloading = "success.."
                state.tasks.push(action.payload)
            })
            .addCase(postTask.rejected, (state, action) => {
                console.log(action.error.message)
                state.isloading = "failed"
                state.error = action.error.message;
            })
            .addCase(updateTask.pending, (state, action) => {
                state.isloading = " loading..."
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                state.isloading = "success.."
            })
            .addCase(updateTask.rejected, (state, action) => {
                state.isloading = "failed"
                state.error = action.error.message;
            })
            .addCase(deleteTask.pending, (state, action) => {
                state.isloading = " loading..."
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.isloading = "success.."
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.isloading = "failed"
                state.error = action.error.message;
            })
    }
})
export default taskSLice.reducer;//ye hmaara taskReducer hai jisko mai default export kiya hai. isliye maine store me iska 
//name change kr diya hai.   

