import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTask, postTask, updateTask, deleteTask } from '../feature/TaskSlice.js'
const Task = () => {
  const dispatch = useDispatch();
  const { tasks, isloading, error, message } = useSelector((state) => state.task);//ye hme state deta hai aur us state se hme ek ek task chahiye.
  const [manager, setmanager] = useState({});
  useEffect(() => {
    dispatch(fetchTask());
  }, [])
  const handleAdd = () => {
    dispatch(postTask(manager))
    setmanager({
      title: "",
      discription: ""
    })
  }
  return (
    <div className='container d-flex justify-content-center'>
      <div className='box pt-5 d-flex  gap-3 '>
        <input type="text" value={manager.title || ""} onChange={(e) => setmanager({ ...manager, title: e.target.value })} />
        <input type="text" value={manager.description || ""} onChange={(e) => setmanager({ ...manager, description: e.target.value })} />
        <button className='btn btn-outline-secondary' onClick={handleAdd}>Add</button>
      </div>
      <div>
        {
          tasks?.map((task) => {
            <div key={task.id}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Task // default export