import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../store/store'
import { addTodo, getTodo, updateTodo, deleteTodo } from '../feature/todoSlice'
const Home = () => {
  const todos = useSelector((state) => state.tasks.todos)
  const dispatch = useDispatch()
  const [todo, settodo] = useState({
    title: "",
    description: ""
  })
  const handlePost = () => {
    useEffect(() => {
      dispatch(getTodo());
    },[dispatch])
  }
  return (
    <div className='container'>
      <div>
        <input className='m-3' type="text" placeholder='tittle' onChange={(e) => settodo({ ...todo, title: e.target.value })} />
        <input className='m-3' type="text" placeholder='description.' onChange={(e) => settodo({ ...todo, description: e.target.value })} />
        <button onClick={
          () => {
            if (todo.title == "" && todo.description == "") {
              alert("please fill both side .. ")
            }
            else {
              dispatch(addTodo(todo));

            }

          }
        } className='btn btn-secondary' >Add</button>
      </div>
      <div className='container'>
        <div className='todo-box d-flex flex-wrap w-100'>
          {
            todos.map((todo ,id) => (
              <div key={id} className='todo'>
                <p >{todo.title}</p>
                <p >{todo.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
