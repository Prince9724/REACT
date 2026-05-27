import {createSlice} from '@reduxjs/toolkit'
const initialState ={
    value:[]
}
const TodoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,actions)=>{state.value.push(actions.payload)},
        removeTodo:(state,actions)=>{state.value.splice(actions.payload,1)},
        updateTodo:(state,actions)=>{state.value[actions.payload.index ]={text:actions.payload.text, status:false}},
    }

})
export const {addTodo, removeTodo,updateTodo} = TodoSlice.actions;
export default TodoSlice.reducer;//todoSlice dafault export ho rha hai  