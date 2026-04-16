import React from 'react'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import '../Sing.css'
const Signin = () => {

    const navigate = useNavigate();
    const [user, setuser] = useState({})
    const [get, setget] = useState([])
    const getUser = async () => {
        const res = await axios.get("http://localhost:3000/user")
        setget(res.data)
    }
    const [see, setsee] = useState(false)
    
    useEffect(() => {
        getUser()
    }, [])
    const handaleSubmite = () => {
        if (!user.email || !user.pasword) {
            alert("Please enter both Email and Password!");
            return; // Function yahi ruk jayega
        }
        // console.log("submite")
        // alert("home page")
        console.log(get)
        const login = get.find((u) => {
            return u.email == user.email && u.pasword == user.pasword
        })
        if (login) {
            alert("succesfull !!");
            localStorage.setItem("current-user",JSON.stringify(login)); 
            navigate("/home")
        }
        else {
            alert("invalid !! ")
        }
    }
    return (
        <div style={{ height: "100vh" }} className="container mt-5 h-100 d-flex justify-content-center">
            <div className="col-4 mt-5">

                <div className="mb-3">
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
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type={see ? "text" : "password"}
                        className="form-control"
                        id="pasword"
                        onChange={(e) => setuser({ ...user, pasword: e.target.value })}
                    />
                </div>  
                <div>
                     
                        <svg onClick={() => setsee(!see)}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="rgba(70,146,221,1)"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>

                    
                </div>
                {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div> */}
                <button type="submit" onClick={() => {
                    handaleSubmite();
                }} className="btn btn-primary">
                    Submit
                </button>


            </div>
        </div>
    )
}

export default Signin