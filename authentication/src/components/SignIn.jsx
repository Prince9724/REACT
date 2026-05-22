import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../feature/userSlice'
import { useNavigate } from 'react-router'

const SignIn = () => {

const dispatch = useDispatch()

const navigate =
useNavigate()

const { users } =
useSelector(
(state)=>
state.authentication
)

const [login,setLogin]=
useState({
email:"",
password:""
})

useEffect(()=>{

dispatch(
getUser()
)

},[])

const handleLogin=()=>{

if(
!login.email||
!login.password
){
alert(
"Fill all fields"
)

return
}

const user =
users.find(
(u)=>

u.email===
login.email

&&

u.password===
login.password
)

if(!user){

alert(
"Invalid Credentials"
)

return
}

localStorage.setItem(
"user",
JSON.stringify(
user
)
)

alert(
"Login Success"
)

navigate(
"/home"
)

}

return (

<div className="container">

<div className="col-5 mx-auto mt-5">

<h2>
Sign In
</h2>

<input
type="email"
placeholder="Email"
className="form-control mb-3"
onChange={(e)=>
setLogin({
...login,
email:
e.target.value
})
}
/>

<input
type="password"
placeholder="Password"
className="form-control mb-3"
onChange={(e)=>
setLogin({
...login,
password:
e.target.value
})
}
/>

<button
className="btn btn-primary w-100"
onClick={
handleLogin
}
>

Login

</button>

</div>

</div>

)

}

export default SignIn