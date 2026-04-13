 import React from 'react'
import Singup from '../components/Singup'
import { Route, Routes } from 'react-router'
import Home from '../screen/Home'
import Signin from '../components/signin/Signin'
 
 const App = () => {
   return (
    
      <Routes>
        <Route path='/' element={<Singup />} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
     
   )
 }
 
 export default App