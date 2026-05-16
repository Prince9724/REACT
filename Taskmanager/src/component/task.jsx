import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {fetchTask,postTask,updateTask,deleteTask} from '../feature/TaskSlice.js'
const Task = () => {
  const dispatch = useDispatch();
  const {tasks, isloading, error , message} = useSelector((state) => state.task);//ye hme state deta hai aur us state se hme ek ek task chahiye.
  const [manager , setmanager] = useState({});
  useEffect(()=>{
    dispatch(fetchTask());
  },[])
  return (
    <div className='container'>
      
    </div>
  )
}

export default Task