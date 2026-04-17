import React, { useState } from 'react'
import { user_api } from '../utils/Api'
import axios from 'axios'
import { useNavigate } from 'react-router'
import '../components/Sing.css'
const Singup = () => {
    const navigate = useNavigate()
    const [user, setuser] = useState({});
    const [check, setcheck] = useState(false)
        const [see, setsee] = useState(false)
    
    const postUser = async () => {
        const res = await axios.post(user_api, user)
        if (res.status == 201) {
            alert("successfull signup");
            navigate("/signin")
            user.name || user.email || user.contact || user.pasword == "";
        }
        else {
            alert("cant signup user !!");
        }
    }


    const passwordRejex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; const emailRejex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const handlleSubmite = async() => {
        console.log("submit")
        const getdata = await axios.get("http://localhost:3000/user")
        const data = getdata.data.findIndex((e)=>e.email==user.email)
        console.log(data)
        if(data!=-1){
            alert("you'r already sinup ")
            navigate("/signin")
        }
         else if(user.name ==""||user.email==""||user.contact==""||user.pasword==""){
            alert("please fill form")
                 
        }
         else if (!emailRejex.test(user.email)) {
            alert("email is invalid !!")
        }
        else if(user.contact ==""){
            alert("please Enter your phone number")
        }
       
       else if (!passwordRejex.test(user.pasword)) {
            alert(" password is week !!")
            return;
        }
        else{
        postUser();

        }
        


    }
    return (
        <div className=' h-100 container  d-flex flex-column align-items-center  justify-content-center '>
            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="80" fill="rgba(1,158,244,1)"><path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path></svg>
            </span>
            <h2>Sing in to Twitter</h2>
            <div className="col6 h-100 m-4">
                <div  >

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
                            type={see ? "text" : "password"}
                            className="form-control"
                            id="pasword"
                            onChange={(e) => setuser({ ...user, pasword: e.target.value })}
                        />
                    </div>
                        <svg onClick={() => setsee(!see)}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="rgba(70,146,221,1)"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"  onChange={() => {
                            setcheck(!check)
                            console.log("--")
                        }} />
                        <label className="form-check-label"  htmlFor="exampleCheck1">
                            Read Again
                        </label>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button type="submit" onClick={() => {
                            console.log("btn click")
                            console.log(check)
                            handlleSubmite()
                        }} className={`submit w-100 btn ${check ? "": "disabled"}`}>
                            Submit
                        </button>
                    </div>
                    <p className='mt-3'>You have an account? <span>
                        <button  className=' Signin'
                        onClick={()=>navigate("/signIn")}
                        >Sign In </button></span>
                        </p>

                </div>

            </div>
        </div>
    )
}

export default Singup