import React, { use } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';
const Form = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({})
    const [check, setcheck] = useState(false)
    const [eye, seteye] = useState(false);
    const isValidContact = (contact) => {
        return /^\d{10}$/.test(contact);
    };
    const handlleSubmite = (e) => {
        e.preventDefault();
        const paswordRejex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (user.email == undefined || user.email == " ") {
            alert("email is requared !!")
        }
        else if (user.name == " " || user.name == undefined) {
            alert("Name is requared !!")
        }
        else if (!paswordRejex.test(user.pasword) || user.pasword == " ") {
            alert(" Pasword is requared !!");
        }
        else if (user.contact.trim() == "" || !isValidContact(user.contact)) {
            alert("minimum 10 digit requared");
        }
        else {
            const users = JSON.parse(localStorage.getItem("users")) || [];//local storage se user name ki array ko get kr liya hai 
            users.push(user);// users ke ander nai user ki ki value push ho rhi hai aur vo local storage ke ander set ho rhi hai 
            localStorage.setItem("users", JSON.stringify(users));//local storage ke ander user name 
            // ki key pr user ki puri information store hai. string form me.  
            navigate("/user")
        }



    }

    return (
        <div style={{ height: "100vh" }} className='mt-5 container d-flex justify-content-center flex-column h-100 align-items-center'>
            <form className='border border-2 p-3 border shadow rounded' onSubmit={handlleSubmite}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Your Name
                    </label>
                    <input
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
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
                        onChange={(e) => setUser({ ...user, email: e.target.value })}

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
                        type={eye ? "text" : "password"}
                        className="form-control"
                        id="pasword"
                        onChange={(e) => setUser({ ...user, pasword: e.target.value })}

                    />
                    <span  >
                        <i onClick={() => seteye(!eye)} className="ri-eye-line"></i>
                    </span>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Contact
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="contact"
                        aria-describedby="emailHelp"
                        onChange={(e) => setUser({ ...user, contact: e.target.value })}

                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Fees
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="fees"
                        aria-describedby="emailHelp"
                        onChange={(e) => setUser({ ...user, fees: e.target.value })}

                    />

                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" checked={check} onChange={() => setcheck(!check)} id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>

                <button type="submit" className={`btn btn-primary ${check ? " " : "disabled"}`}>
                    Submit
                </button>
            </form>
        <div className='p-5'>
  
        </div>

        </div>
    )
}

export default Form
