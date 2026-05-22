import React from 'react'
import SignUp from './components/SignUp'
import {Route, Routes}from 'react-router'
import SignIn from './components/SignIn.jsx'
import Home from './components/Home.jsx'
const App = () => {
  return (
    <div>
      {/* <SignUp/> */}
       <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/home' element={<Home/>}/>
       </Routes>
      
    </div>
  )
}

export default App