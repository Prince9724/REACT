import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getUser, addUser } from "../feature/userSlice.js"
import { useNavigate } from 'react-router'
const signUp = () => {
    const navigate = useNavigate();
    const { users } = useSelector((state) => state.authentication)
    const dispatch = useDispatch();
    const [user, setuser] = useState({
        name: "",
        email: "",
        contact: "",
        password: ""
    })
    const passwordRejex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRejex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const handlleSubmite = async () => {

        console.log("submit")
        console.log("++")

       


        if (user.name == "" || user.email == "" || user.contact == "" || user.password == "") {
            alert("please fill form")

        }
        else if (!emailRejex.test(user.email)) {
            alert("email is invalid !!")
        }
        else if (user.contact == "") {
            alert("please Enter your phone number")
        }

      
        else {

            const exist =
                users.find(
                    (e) =>
                        e.email === user.email
                )

            if (exist) {
                alert("Already Signup")
                return
            }

            await dispatch(
                addUser(user)
            )

            navigate("/signin")

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
                            onChange={(e) => setuser({ ...user, name: e.target.value })}
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
                            onChange={(e) => setuser({ ...user, email: e.target.value })}
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
                            onChange={(e) => setuser({ ...user, contact: e.target.value })}
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
                            onChange={(e) => setuser({ ...user, password: e.target.value })}
                        />
                    </div>

                    

                    <div className='d-flex justify-content-center'>
                        <button type="submit" onClick={() => {
                            console.log("btn click")

                            handlleSubmite()

                        }} className="btn btn-primary">
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