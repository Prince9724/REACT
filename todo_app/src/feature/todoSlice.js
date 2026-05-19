import { createSlice, createAsyncThunk}from '@reduxjs/toolkit'
import axios from 'axios'

const addTodo = createAsyncThunk("add/todo",async ()=>{
    const res= await axios.get("")
})