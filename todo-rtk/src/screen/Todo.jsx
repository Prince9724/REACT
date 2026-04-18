import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addTodo, removeTodo, updateTodo } from '../feature/todoSlice'
import { useState } from 'react'
const Todo = () => {
    const[text,settext] = useState("");
    const  data = useSelector((state)=>state.todo.value)
    const dispatch = useDispatch();
  return (
    <div className='container'>
        <div className='d-flex justify-content-center mt-5'>
            <input type="text" 
              value={text||""}
            onChange={(e)=>settext(e.target.value)}/>
            <button className='btn btn-secondary ms-3' onClick={()=>{
              dispatch((addTodo(text)))
              settext();  
            }} >add</button>
        </div>
        <div className='mt-5'>
          {
            data.map((e,i)=><div className='border border-danger mt-3 border-2 w-50 d-flex justify-content-between p-3 rounded rounded-3'>
          <h2>{e}</h2>
          <button className='btn btn-outline-danger' onClick={()=>dispatch(removeTodo(i))}>remove</button>
          <button className='btn btn-outline-success'onClick={()=>dispatch(updateTodo())}>
            Edit
          </button>  
            </div>)
          }
        </div>

    </div>
  )
}

export default Todo