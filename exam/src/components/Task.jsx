import React, { useState } from 'react'
// import Navigate
const Task = () => {
   const [title, settitle] = useState({})
  const handleAddbtn =()=>{
    const taks = JSON.parse(localStorage.getItem("title")) || [];
    taks.push(title);
    localStorage.setItem("title",JSON.stringify(title));

  }
  const displayTitle =()=>{
    
  }
 
  return (
    <div className='container-fluid'>
      <h1>task manager 223</h1>

      <div className='w-100 container mt-5 d-flex justify-content-center gap-3'>
        <input type="text" onChange={(e) => settitle({...title,title: e.target.value })} />
        <label htmlFor=""> tittle</label>
        <input type="text" onChange={(e) => settitle({...title,description : e.target.value })} />
        <label htmlFor="">description</label>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Task status
          </button>
          <ul className="dropdown-menu" value = " default">
            <li><a className="dropdown-item" value="complete" href="#">Complete</a></li>
            <li><a className="dropdown-item" value="runing" href="#">Runing</a></li>
            <li><a className="dropdown-item" value="pending" href="#">Pending</a></li>
          </ul>
        </div>
        <button className='btn btn-primary ' onClick={handleAddbtn}>Add</button>
      </div>
      <div className='container d-flex flex-wrap mt-4'>
        <a href=""></a>
        <div className=' d-flex gap-5 '>
          <p></p>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
               
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Complete</a></li>
              <li><a className="dropdown-item" href="#">Runing</a></li>
              <li><a className="dropdown-item" href="#">Pending</a></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Task