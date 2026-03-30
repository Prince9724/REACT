import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Task = () => {
    const [task, settask] = useState({
        title: "",
        description :""
    });
    const handlesubmit =()=>{
        const displayArr = JSON.parse(localStorage.getItem("task"))||[];
        displayArr.push(task);
       localStorage.setItem("task", JSON.stringify(displayArr));
        console.log(task.title);
    }
    // useEffect(()=>{
    //     handlesubmit();
    // },[])
    return (
        <div className='container-fluid'>
            <div className="container ">
                <div className='d-flex flex-wrap gap-3 justify-content-center mt-5 border border-2 shadow p-3 rounded-2'>
                    <input type="text" className='rounded'onChange={(e)=> settask({...task , title : e.target.value})} /><label htmlFor="" className='fs-5'>tittle</label>
                    <input type="text" className='rounded'onChange={(e)=> settask({...task , description : e.target.value})} /><label htmlFor="" className='fs-5'>Description</label>
                    {/* <select class="form-select"className='w-25' aria-label="Default select example">
                        <option selected>Select Your status</option>
                        <option value="1">Complete</option>
                        <option value="2">Running</option>
                        <option value="3">Pending</option>
                    </select> */}
                    <button onClick={handlesubmit} className='btn btn-primary'>
                        Add
                    </button>
                    {/* <button className='btn btn-primary'>
                        
                    </button> */}
                </div>
            </div>
            <div className="container">
                {
                    <div>
                        {/* <h1>{task.title}</h1> */}
                        {/* <h1>{task.description}</h1> */}
                        
                    </div>
                    
                }
            </div>
        </div>
    )
}

export default Task