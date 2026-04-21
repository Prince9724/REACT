import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'//useselector aur dispatch ko react-redux se import krna hai. 
import { addTodo, removeTodo, updateTodo } from '../feature/todoSlice'//silce ke ander se import huye hai 
import './Todo.css'

const Todo = () => {
  const [text, settext] = useState("")
  const [done, setdone] = useState(false)
  const [isupdate, setupdate] = useState({index:-1 ,status:false})
  const data = useSelector((state) => state.todo.value)
  const dispatch = useDispatch()

  return (
     <div className='container pt-3 d-flex flex-column  align-items-center '>
       <div className='col-10'>

         <div className='d-flex border shadow p-3 justify-content-around '>
          <input className='w-75'
          placeholder='enter your todo'
            value={text||""}
          onChange={(e)=>{settext(e.target.value)}} type="text" />
          <button
            className={`btn ${isupdate.status ? "btn-warning":"btn-primary"}`}
           onClick={()=>
            {
              dispatch( isupdate.status ? updateTodo({text,index:isupdate.index}) : addTodo({text,status:false}))
                settext("")
                setupdate(false)
            }
            }>{isupdate.status?"Update" :"add"}</button>
        </div>
        <div style={{height:"620px"}} className=' shadow border-3 mb-3 p-3 border shadow rounded mt-3 overflow-auto'>
            {
               data.map((e, i) => (
              <div className={`d-flex justify-content-between p-3 m-3 border ${done? "border-success":"border-danger"} shadow  rounded border-2`} key={i}>

                <h3 className="todo-text">{e.text}</h3>

                <div className="actions">
                  <button className="btn btn-warning " onClick={() =>
                   { 
                    settext(e.text)
                     setupdate({index:i ,status:true}) 

                  }
                     }>
                    Edit
                  </button>
                  <button className="btn btn-danger mx-3" onClick={() => dispatch(removeTodo(i))}>
                    Delete
                  </button>
                  <button className={`btn ${done?"btn-success":"btn-warning"}`} onClick={ ()=>{
                    {done?setdone(false):setdone(true)}
                  }}>
                    Done
                  </button>
                </div>

              </div>
            ))
            }
        </div>
       </div>

     </div>
  )
}

export default Todo
/* 
<div className="todo-main">

      <div className="todo-card">

        <h1 className="title">My Todo App</h1>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter task..."
            value={text || ""}
            onChange={(e) => settext(e.target.value)}
          />
          <button className="add-btn" onClick={() => {
            dispatch(addTodo(text))
            settext("")
          }}>
            Add
          </button>
        </div>

        <div className="todo-list">
          {
           
          }
        </div>

      </div>

    </div>
*/