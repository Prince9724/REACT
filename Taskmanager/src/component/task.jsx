import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {fetchTask,postTask,updateTask,deleteTask} from '../feature/TaskSlice.js'
const task = () => {
  const dispatch = useDispatch();
  const {tasks, isloading, error , message} = useSelector((state) => state.task);//ye hme state deta hai aur us state se hme ek ek task chahiye.
  useEffect(()=>{
    dispatch(fetchTask());
  },[])
  return (
    <div>{tasks.length}</div>
  )
}

export default task