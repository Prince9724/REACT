import { CreateSlice, createAsyncThunk } from '@reduxjs/toolkit'//reduxjs/toolkit se import hua hai 
import axios from 'axios'//axios npm se install kr ke import kiya hai 
import TaskApi from '../utils/Api.js' //taskApi ek api url hai jise api.js me default export kiya hai 
export const fetchTask = createAsyncThunk("task/get", async () => { //ex variable hai jisko named export kiya hai aur ek unic naam bhi diya hai 
  //yha pr keval data get hoga api url se data get hoga   
    const res = await axios.get(TaskApi);   
    return res.data; //agr succesful api se data get ho gya to yha se res.data return hoga
})
export const postTask = createAsyncThunk("task/post", async (data) => { //
    const res = await axios.post(TaskApi, data)
    return res.data;
})
export const updateTask = createAsyncThunk("task/put", async (data) => {
    const res = await axios.put(TaskApi + "  / " + id, data)
    return res.data
})
export const deleteTask = createAsyncThunk("task/delete", async (id) => {
    const res = await axios.delete(TaskApi + "  / " + id)
    return res.data;
})
const taskSLice = CreateSlice({
    name: "task",
    initialState: {
        tasks: [],
        isloading: false,
        erore: null,
        message :""
    },
    extrareducers: (builder) => {
        builder
            .addcase(fetchTask.pending, (state, action) => {
                state.isloading = "ruko jara sbr kro.. "
            })
            .addcase(fetchTask.fulfilled, (state, action) => {
                state.tasks = action.payload
                state.isloading = "Task added succesfull "
            })
            .addcase(fetchTask.rejected, (state, action) => {
                state.isloading = "failed"
                state.erore = action.erore;
            })
            .addcase(postTask.pending, (state, action) => {
                state.isloading = " loading..."
            })
            .addcase(postTask.fulfilled, (state, action) => {
                state.isloading = "success.."
            })
            .addcase(postTask.rejected, (state, action) => {
                state.isloading = "failed"
                state.erore = action.erore.message;
            })
            .addcase(updateTask.pending, (state, action) => {
                state.isloading = " loading..."
            })
            .addcase(updateTask.fulfilled, (state, action) => {
                state.isloading = "success.."
            })
            .addcase(updateTask.rejected, (state, action) => {
                state.isloading = "failed"
                state.erore = action.erore.message;
            })
            .addcase(deleteTask.pending, (state, action) => {
                state.isloading = " loading..."
            })
            .addcase(deleteTask.fulfilled, (state, action) => {
                state.isloading = "success.."
            })
            .addcase(deleteTask.rejected, (state, action) => {
                state.isloading = "failed"
                state.erore = action.erore.message;
            })
    }
})
export default taskSLice.reducer;//ye hmaara taskReducer hai jisko mai default export kiya hai. isliye maine store me iska 
//name change kr diya hai.   