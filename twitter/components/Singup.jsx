import React, { useState } from 'react'
import { user_api } from '../utils/Api'
import axios from 'axios'
import '../components/Sing.css'
const Singup = () => {

    const [user, setuser] = useState({});
    const postUser = async () => {
        const res = await axios.post(user_api, user)
        if (res.status == 201) {
            alert("successfull signup");
            user.name || user.email || user.contact || user.pasword == "";
        }
        else {
            alert("cant signup user !!");
        }
    }


    const passwordRejex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; const emailRejex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const handlleSubmite = () => {
        console.log("submit")
        
         if(user.name == "  "){
            alert("please Enter name")
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

                    <div className="mb-3">
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
                            type="password"
                            className="form-control"
                            id="pasword"
                            onChange={(e) => setuser({ ...user, pasword: e.target.value })}
                        />
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button type="submit" onClick={() => {
                            console.log("btn click")
                            handlleSubmite()
                        }} className="submit w-100">
                            Submit
                        </button>
                    </div>
                    <p className='mt-3'>You have an account? <span className=' Signin'>Sign In</span></p>

                </div>

            </div>
        </div>
    )
}

export default Singup