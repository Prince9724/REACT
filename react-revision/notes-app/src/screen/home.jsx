import React,{useState,useEffect} from 'react'
import axios from 'axios'
const home = () => {
     const handlefetchuser = async()=>{
        const res = await axios.get("http://localhost:3000/users")
     };
  return (
    <div>
        {
            users.map((user)=>{
                <p>{user.title}</p>
            })
        }
    </div>
)
}

export default home