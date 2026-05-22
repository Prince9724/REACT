import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getUser, addUser } from "../feature/userSlice.js"
import { useNavigate } from 'react-router'
const signUp = () => {
    const navigate = useNavigate();
    const { users } = useSelector((state) => state.authentication.users)
    const dispatch = useDispatch();
    const [user , setuser] = useState({})
    const passwordRejex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
     const emailRejex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

     const handlleSubmite = async() => {

        console.log("submit")
        console.log("++")
       
        // if(user!=-1){
        //     alert("you'r already sinup ")
        //     navigate("/signin")
        // }
        

           if(user.name ==""||user.email==""||user.contact==""||user.pasword==""){
            alert("please fill form")
                 
        }
         else if (!emailRejex.test(user.email)) {
            alert("email is invalid !!")
        }
        else if(user.contact ==""){
            alert("please Enter your phone number")
        }
       
    //    else if (!passwordRejex.test(user.pasword)) {
    //         alert(" password is week !!")
    //         return;
    //     }
        else{
        dispatch(addUser(user))
        

        }
        


    }
    return (
        <div className='container'>
            <div className=' d-flex justify-content-center mt-3'>
                <div className='col-5 mt-4' >

                    <div className="">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            onChange={(e) => setuser({...user,name:e.target.value} )}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            onChange={(e) => setuser({...user,email:e.target.value})}
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            contact
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="contact"
                            onChange={(e) => setuser( {...user,contact:e.target.value})}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type='pasword'
                            className="form-control"
                            id="pasword"
                            onChange={(e) =>setuser({...user,pasword:e.target.value})}
                        />
                    </div>
                    <svg onClick={() => setsee(!see)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="rgba(70,146,221,1)"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={() => {
                            setcheck(!check)
                            console.log("--")
                        }} />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Read Again
                        </label>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button type="submit" onClick={() => {
                            console.log("btn click")
                           
                            handlleSubmite()
                        navigate("/home")
                           
                        }} className = "btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className='mt-3'>You have an account? <span>
                        <button className=' Signin btn btn-secondary'
                            onClick={() => navigate("/signin")}
                        >Sign In </button></span>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default signUp