import React, { useEffect, useState } from 'react'//usestate aur useeffect dono ko react se import kiya hai 
import { useSelector, useDispatch } from 'react-redux'//useselector aur dispatch dono react-redux se import hua hai
import { fetchTask, postTask, updateTask, deleteTask } from '../feature/TaskSlice.js'// inko slice se named export krke import kiya hai
const Task = () => {//ek functon hai task 
  const dispatch = useDispatch();//dispatch ke ander usedispatch ko store kiya taaki kahi pr bhi dispach use kr sku 
  const { tasks, isloading, error, message } = useSelector((state) => state.task);
  //ye hme state deta hai aur us state se hme ek ek task chahiye.
  const [manager, setmanager] = useState({});//ye maine usestate bnaaya hai aur iske throw maine data ko post kiya hai 
  useEffect(() => {//useeffect ke ander dispatch ko call kiya hai 
    dispatch(fetchTask());//dispatch me fetchtask ko call kiya hai 
  }, [])
  const handleAdd = () => {//handleAdd ek function bnaya hai jiske ander maine button click ka feature add kiya hai 
    if (
      !manager.title ||//agar title aur desctription fill nahi hai to usko ek ek alert box dikhega 
      !manager.description
    ) {
      return alert("Fill all fields")//agar input dono khaali hai to user ko ye allert box dikhega 
    }

    dispatch(postTask(manager))//button click hote hi api ke ander jo task hai vo post h jaayega 
    console.log("helo")
    setmanager({
      title: "",
      description: "",
      priority: "low",
      status: "pending"
    })
  }
  const handleUpdate = () => {

  }
  //todo -> edit click krne pr old data input me  aana chahiye user kuch change krega aur fir jab update krega to api call hona chahiye 
  //redux state update uske badd ui change ho jaaana chahiye 
  const handleEdit = (task) => {
    setmanager(task)
  }
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center'>
      <div className='box pt-5 d-flex  gap-3 '>
        <input type="text" value={manager.title || ""} onChange={(e) => setmanager({ ...manager, title: e.target.value })} />
        <input type="text" value={manager.description || ""} onChange={(e) => setmanager({ ...manager, description: e.target.value })} />
        <select
          className="form-select"
          value={manager.priority || ""}
          onChange={(e) =>
            setmanager({
              ...manager,
              priority: e.target.value
            })
          }
        >
          <option value="">Select your Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button className='btn btn-outline-secondary' onClick={handleAdd}>Add</button>
        <button className='btn btn-outline-secondary' onClick={handleUpdate}>update</button>

      </div>
      <div className='w-100 d-flex flex-wrap justify-content-center'>
        {
          tasks?.map((task) => (
            <div className={`w-25 border border-2 m-3 p-3
              ${task.priority=="low"?"border-success":
            task.priority=="high"?"border-danger":
            task.priority=="medium"?"border-warning":"border"} rounded-3`} key={task.id}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <div>
                <button className='btn btn-outline-warning mx-2' onClick={() => {
                  handleEdit(task)
                }}>Edit</button>
                <button onClick={() => {
                  dispatch(deleteTask({
                    id: task.id
                  }))
                  dispatch(fetchTask())
                }} className='btn btn-outline-danger'>Delete</button>
              </div>
            </div>

          ))
        }
      </div>      
    </div>
  )
}

export default Task // default export kiya hai 

//todo summary 
///id + tod important hai
//only id in delete
//api -thunk - return - action- action.payload -> state,todos (initialstate ka data hai )
//gettodo ==> duspatch (gettodo()call)-> thunk function -> api call - res.data return->full fillecd(extrareducer)-> state.todos= action.payload -> todos(initialstate)-> automativc - useselector ke throw ui me update ho gya
//pahle ham adcase ke ander id naam ki variabl ebnaayenge aur uske ander todo ki id stor krenge iske baad
// const index= state.todo.findindex((todo))=> todo.id == id );isko return krke index name ki variabvle ke ander store kr rhe hai
//state.todos[index]= action.payload;
// ye update ho jaayega 

