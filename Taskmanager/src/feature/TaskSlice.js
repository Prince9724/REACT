import { CreateSlice, CreateAsyncThunk, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import TaskApi from '../store/Store.js'
const fetchTask = createAsyncThunk("task/get", async () => {
    const res = await axios.get(TaskApi);
    return res.data;
})
const postTask = createAsyncThunk("task/post", async (data) => {
    const res = await axios.post(TaskApi, data)
    return res.data;
})
const updateTask = createAsyncThunk("task/put", async (data) => {
    const res = await axios.put(TaskApi + "  / " + id, data)
    return res.data
})
const deleteTask = createAsyncThunk("task/delete", async (id) => {
    const res = await axios.delete(TaskApi + "  / " + id)
    return res.data;
})
const taskSLice = CreateSlice({
    name: "task",
    initialState: {
        tasks: [],
        isloading: false,
        erore: null
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
export default taskSLice.reducer;