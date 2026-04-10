 import React from 'react'
import Singup from '../components/Singup'
import { Route, Routes } from 'react-router'
import Home from '../screen/Home'
 
 const App = () => {
   return (
    
      <Routes>
        <Route path='/' element={<Singup />} />
        <Route path='/home' element={<Home/>} />
      </Routes>
     
   )
 }
 
 export default App