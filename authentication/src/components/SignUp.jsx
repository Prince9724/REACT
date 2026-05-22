import React from 'react'
import { useDispatch , useSelector } from "react-redux"
import {getUser,addUser}from "../feature/userSlice.js"
const signUp = () => {
    const {users} = useSelector((state)=> state.authentication.users)
    const dispatch = useDispatch();    

  return (
    <div className='container'>
         
    </div>
  )
}

export default signUp