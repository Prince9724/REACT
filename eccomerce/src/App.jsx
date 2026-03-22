 import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Card from './component/Card/Card.jsx'
import { Navigate } from 'react-router'
 const App = () => {
   return (
     <div>
      <Navbar />
      <Card />
     </div>
   )
 }
 
 export default App