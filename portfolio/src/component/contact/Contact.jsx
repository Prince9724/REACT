
import React, { useState } from 'react'
import "./Contact.css"
 
const Contact = () => {
    const [use, setuse]= useState("");
    const[email, setemail] = useState("");
    const [massage, setmassage] = useState("");
    const clear =()=>{
        setuse("");
        setemail("");
        setmassage("");
        alert("your details is send !!")
    }
    return (
        <div id='contact' className='contact-box container-fluid p-5'>

            <h3 className='text-center'>Contact</h3>
            <div className='container d-flex flex-wrap w-100 justify-content-around mt-5'>
                <div>
                    <h1>
                        Prince Gond
                    </h1>
                    <h3>Full stack web developer </h3>
                    <h4>contact no. 9724672317</h4>
                    <p><a href="">princegondrw123@gmail.com</a></p>
                </div>
                <div className='send-box'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Your Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder='Your Name'
                            value={use}
                            onChange={(e)=>{
                                setuse(e.target.value)
                            }}
                        />


                    </div>

                    <div className=" mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>


                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder='Your email'
                            value={email}
                            onChange={(e)=> setemail(e.target.value)}
                        />
                        <div id="emailHelp" className="form-text text-white">
                            We'll never share your email with anyone else.
                        </div>
                    </div>

                    <div className="mb-3 form-check">
                        <div class="form-floating">
                            <textarea className="form-control"
                            value={massage}
                            onChange={(e)=> setmassage(e.target.value)}
                            placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Send massage </label>
                        </div>
                    </div>

                    <button type="submit"  onClick={clear} className="btn btn-primary">
                        Send 
                    </button>
                </div>
            </div>



        </div>
    )
}

export default Contact