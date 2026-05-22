import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'//import kiya hai rtk me se inko 
import axios from 'axios'

export const addTodo = createAsyncThunk("add/todo", async (todo) => {
    const res = await axios.post("http://localhost:3000/    todos", todo)
    return res.data;
})
export const getTodo = createAsyncThunk("get/todo", async () => {
    const res = await axios.get("http://localhost:3000/todos");
    return res.data;
})
export const updateTodo = createAsyncThunk(
  "update/todo",
  async (todo) => {
    const res = await axios.put(
      `http://localhost:3000/todos/${todo.id}`,
      todo
    )   

    return res.data
  }
)
export const deleteTodo = createAsyncThunk("delete/todo", async (id) => {
    const res = await axios.delete(`http://localhost:3000/todos/${id}`);
    return id;
})

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
        error: null,
        isloading: true
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTodo.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.isloading = false
            })
            .addCase(getTodo.pending, (state, action) => {
                state.isloading = "ruko jra sbr kro....."
            })
            .addCase(getTodo.rejected, (state, payload) => {
                state.error = action.error;
                state.isloading = action.error.massege
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload)
            })
            .addCase(addTodo.pending, (state, action) => {
                state.isloading = "aa rha hai wait..."
            })
            .addCase(addTodo.rejected, (state, action) => {
                state.error = action.error,
                    state.isloading = "seva smapt ho "
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                const id = action.payload.id;
                const index = state.todos.findIndex((todo) => todo.id == id);
                state.todos[index] = action.payload;
            })
            .addCase(updateTodo.pending, (state, action) => {
                state.isloading = "aa rha hai wait..."
            })
            .addCase(updateTodo.rejected, (state, action) => {
                state.error = action.error,
                    state.isloading = action.error.message
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
               state.todos = state.todos.filter((todo)=>{
                todo.id!=action.payload
               })
            })
            .addCase(deleteTodo.pending, (state, action) => {
                state.isloading = "aa rha hai wait..."
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                state.error = action.error,
                    state.isloading = action.error.message
            })

    }
})

export default todoSlice.reducer;
