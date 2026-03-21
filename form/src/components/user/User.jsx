import React, { use } from 'react'
import { useState } from 'react'
const User = () => {
    const [users, setusers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const remove =()=>{
       users.splice(0,1)
    }
    return (
        <div className='container d-flex flex-wrap justify-content-center gap-3 mt-5'>

            {
                users.map((user, i) => (
                    <div className=' shadow rounded p-3 m-3'>
                        <h1 key={i}>{user.name}</h1>
                        <p key={i}>{ user.email} </p>
                        <h4 key={i}>  {user.pasword}</h4>
                        <h5 key={i}>{user.contact}</h5>
                        <div>
                            <button onClick={remove} className='btn btn-danger'>delete</button>
                        </div>
                    </div>
                     
                ))
            }
        </div>

    )
}

export default User