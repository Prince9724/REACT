import React, { useEffect, useState } from 'react'//usestate aur useeffect dono ko react se import kiya hai 
import { useSelector, useDispatch } from 'react-redux'//useselector aur dispatch dono react-redux se import hua hai
import { fetchTask, postTask, updateTask, deleteTask } from '../feature/TaskSlice.js'// inko slice se named export krke import kiya hai
const Task = () => {//ek functon hai task

  const dispatch = useDispatch();//dispatch ke ander usedispatch ko store kiya taaki kahi pr bhi dispach use kr sku 
  const { tasks, isloading, error, message } = useSelector((state) => state.task);
  //ye hme state deta hai aur us state se hme ek ek task chahiye.
  const [manager, setmanager] = useState({});//ye maine usestate bnaaya hai aur iske throw maine data ko post kiya hai 
  const [filter, setfilter] = useState("");
  const [checkedIds, setCheckedIds] = useState([])

  const handleCheck = (id) => {
    if (!checkedIds.includes(id)) {
      setCheckedIds((prev) => [...prev, id])
    }
  }
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

    if (manager.id) {

      dispatch(updateTask(manager))

    } else {

      dispatch(postTask(manager))
    }
    console.log("---------<<<")
    dispatch(fetchTask())
    // dispatch(postTask(manager))//button click hote hi api ke ander jo task hai vo post h jaayega 
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
    console.log(task)
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
        <button className='btn btn-outline-secondary' onClick={handleAdd}>  {manager.id ? "Update" : "Add"}</button>
        {/* <button className='btn btn-outline-secondary' onClick={handleUpdate}>update</button> */}

      </div>
      <div className='mt-5'>
        <input type="text" />
        <select
          className="form-select" value={filter} onChange={(e) => setfilter(e.target.value)}>
          <option value="">ALL</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className='w-100 d-flex flex-wrap justify-content-center'>

        {
          tasks?.filter((task) =>
            filter === "" ? true : task.priority === filter
          )
            ?.map((task) => (
              <div className={`w-25 border border-2 m-3 p-3
              ${task.priority == "low" ? "border-success" :
                  task.priority == "high" ? "border-danger" :
                    task.priority == "medium" ? "border-warning" : "border"} rounded-3`} key={task.id}>
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <div>
                  <button className='btn btn-outline-warning mx-2' onClick={() => {
                    handleEdit(task)
                  }}>Edit</button>
                  <button onClick={() => {
                    dispatch(deleteTask(task.id))
                    dispatch(fetchTask())
                  }} className='btn btn-outline-danger'>Delete</button>

                </div>
                <input type="checkbox" checked={checkedIds.includes(task.id)}
                  disabled={checkedIds.includes(task.id)}
                  onChange={() => handleCheck(task.id)} />
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



//jsx ==> html aur javascript ke code ko ek sath likhne ki facility deta hai.
//virtual dom => page ko reload nahi krta hai sirf ipdate form ko hi update krta hai  
// ek component ko multipal jgah use kr skte hai.
//react ek javascript library hai jo fast aur reusable user interface bnaane ke liye use hotti hai.
//react ek javascript library hai jo user interface bnaane ke liye use hota hai isme ham reusable component bnate hai.
// ==> hook react ka special function hota hai jo fuvnction component ko react ki faci;lity provide krta hai 
// aplicaion programing interface ==> API
//axios => axios ka use ham api calling ke liye krte hai.
// axios axios se import hota hai 
//isme ham post get delete put patch ka use kr ke api ko handle krte hai.

///***********RTK********* */

// redux toolkit ek tool hia jo app ke data ko manage krta hai code ko short aur easy bna deta hai.
//redux toolkit ek modern tooll hai jo refux ko simple fast aur esasy bna deta hai with less code.
//slice ==> slice redux toolkit ka ek part hota hai jo state reducer action ko ek hi jagah define krta hai.
//slice ==> state ka chhota part + uska logic + uska action.
//action ==> action ek object hota hai jo btata hai ki state me kya krna hai.
//  MVC == modern view controller 
// json => javascript object notation.. 
//redux me async ko handle krna muskil hota tha isliye reduxtoolkit ne create asyncThunk diya 
//create async thunk me action ko  handel krne ke liye exrareducer ka use hota hai 
// builder ek helpper object hota hai isase ham alag alg casses ko handle krte hai 
//reducer ==>  reducr ek function hota hai jo curent data aur action ko update krke new updated data return krta hai.
//   usecontext ==>  parrent child ke flow me data ko bina component ke use kiye parrent se child ke paass pahucha deta hai. 
// server == server vo hota hai jo request accept krta hai aur response bhejta hai..
// reducer ==> ye ek object hota hia jo dir changes part ko hi update krta hai.



