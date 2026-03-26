 import React from 'react'
import Navbar from './component/Navbar/Navbar'
import { Navigate } from 'react-router'
import { Routes , Route } from 'react-router'
import Card from './component/Card/Card'
import Cart from './component/Cart/Cart'
// import Cart from './component/Cart/Cart.jsx'
 const App = () => {
   return (
    <div>
      <Navbar />

      <Routes>

        <Route path='/' element={<Card/>}/>
       <Route path='/cart' element = {<Cart />} />
      </Routes>

     </div>
   )
 }
 
 export default App