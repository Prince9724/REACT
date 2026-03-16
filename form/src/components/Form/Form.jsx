import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [user, setUser] =useState({})
    const handlleSubmite =()=>{
        localStorage.setItem("user",JSON.stringify(user));//local storage ke ander user name 
        // ki key pr user ki puri information store hai. string form me.  

    }
    
    return (
        <div style={{height:"100vh"}} className=' container d-flex justify-content-center align-items-center'>
            <form onSubmit={handlleSubmite}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                       Your Name
                    </label>
                    <input
                    onChange={(e)=>setUser({...user, name:e.target.value})}
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                    />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                    onChange={(e)=>setUser({...user, email:e.target.value})}

                        type="Email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
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
                        type="Password"
                        className="form-control"
                        id="pasword"
                    onChange={(e)=>setUser({...user, pasword:e.target.value})}

                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                       Contact
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    
                </div>
               
                 
                <button  type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>


        </div>
    )
}

export default Form
