import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {fetchTask,postTask,updateTask,deleteTask} from '../feature/TaskSlice.js'
const task = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.task);//ye hme state deta hai aur us state se hme ek ek task chahiye.
   
  return (
    <div>task</div>
  )
}

export default task