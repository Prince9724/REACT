import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../feature/userSlice.js";
import { useNavigate } from 'react-router';

const SignUp = () => {
    const navigate = useNavigate();
    // Apne Redux store ke setup ke mutabik state select karein
    const { users } = useSelector((state) => state.authentication.users || { users: [] });
    const dispatch = useDispatch();

    // States ko sahi se declare kiya gaya hai
    const [user, setUser] = useState({ name: "", email: "", contact: "", password: "" });
    const [see, setSee] = useState(false); // Password dekhne/chhupane ke liye
    const [check, setCheck] = useState(false); // Read Again checkbox ke liye

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleSubmit = async () => {

        if (
            !user.name ||
            !user.email ||
            !user.contact ||
            !user.password
        ) {
            alert("Please fill whole form")
            return
        }

        if (
            !emailRegex.test(
                user.email
            )
        ) {
            alert("Invalid Email")
            return
        }

        if (
            !passwordRegex.test(
                user.password
            )
        ) {
            alert(
                "Password should contain uppercase lowercase number and special character"
            )
            return
        }

        if (!check) {
            alert(
                "Please check Read Again"
            )
            return
        }

        const exist =
            users.find(
                (e) =>
                    e.email === user.email
            )

        if (exist) {
            alert(
                "Email already registered"
            )

            navigate("/signin")

            return
        }

        await dispatch(
            addUser(user)
        )

        alert(
            "Registration Successful"
        )

        setUser({
            name: "",
            email: "",
            contact: "",
            password: ""
        })

        navigate("/signin")
    }

    return (
        <div className='container'>
            <div className='d-flex justify-content-center mt-3'>
                <div className='col-5 mt-4'>
                    <h3 className="text-center mb-4">Sign Up</h3>


                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="contact" className="form-label">Contact</label>
                        <input
                            type="number"
                            className="form-control"
                            id="contact"
                            value={user.contact}
                            onChange={(e) => setUser({ ...user, contact: e.target.value })}
                        />
                    </div>

                    <div className="mb-3 position-relative">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="d-flex align-items-center">
                            <input
                                type={see ? "text" : "password"} // Dynamic toggle
                                className="form-control"
                                id="password"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />
                            <span style={{ cursor: 'pointer', marginLeft: '-35px', zIndex: '10' }}>
                                <svg onClick={() => setSee(!see)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="rgba(70,146,221,1)">
                                    <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            checked={check}
                            onChange={() => setCheck(!check)}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Read Again
                        </label>
                    </div>

                    {/* Buttons */}
                    <div className='d-flex justify-content-center'>
                        <button type="button" onClick={handleSubmit} className="btn btn-primary w-100">
                            Submit
                        </button>
                    </div>

                    <p className='mt-3 text-center'>
                        You have an account? <span>
                            <button className='Signin btn btn-link p-0' onClick={() => navigate("/signin")}>
                                Sign In
                            </button>
                        </span>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default SignUp;
