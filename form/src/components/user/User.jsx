import React, { use } from 'react'
import { useState } from 'react'
const User = () => {
    const [users, setusers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const [search, setsearch] = useState("");
    const [check, setcheck]=useState(false);
    const remove = () => {
        users.splice(0, 1)
    }
    const lowHight =()=>{
         const arr =[...users];
                const High =    arr.sort((a,b)=>a.fees - b.fees )
                    setusers(arr);
        if(check){
              arr.sort((a,b)=>a.fees - b.fees )
                    setusers(arr);
        }
        else{
             arr.sort((a,b)=>b.fees - a.fees)
                setusers(arr);
        }
        setcheck(!check);
    }
    return (

        <div className='container d-flex  justify-content-center align-items-center flex-column gap-3 mt-5'>
            <div>
                <input onChange={(e) => setsearch(e.target.value)} type="text" />
                <button className='btn btn-primary mx-3' onClick={() => {
                    setusers(users.filter((user) => user.name.toLowerCase() == search.toLowerCase()||user.fees== search));
                }}>Search</button>
                <button className='btn btn-secondary mx-3' onClick={() => {
                    setusers(JSON.parse(localStorage.getItem("users")));
                }}>clear</button>
                <button className='btn btn-warning mx-3'onClick={()=>{
                    // const arr =[...users];
                    // arr.sort((a,b)=>a.fees - b.fees )
                    // setusers(arr);
                    
                    lowHight();
                }} >{!check? "low to high" : "high to low" }</button>
            </div>
            <div className="container d-flex flex-wrap justify-content-center">
                {
                    users.map((user, i) => (
                        <div key={i} className=' shadow rounded  p-3 m-3'>
                            <h1 >{user.name}</h1>
                            <p>{user.email} </p>
                            <h4 >  {user.pasword}</h4>
                            <h5>{user.contact}</h5>
                            <h5 >{user.fees}</h5>
                            <div>
                            <button className='btn btn-danger' onClick={()=>{
                               const arr = [...users];
                              setusers( users.filter((u)=>u.email != user.email));
                               setusers(arr);
                            }}>delete</button>
                        </div>
                        </div>

                    ))
                }
            </div>
        </div>

    )
}

export default User