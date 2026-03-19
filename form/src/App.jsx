import React from 'react'
import Form from './components/Form/Form.jsx' 
import Navbar from './components/Navbar/Navbar.jsx'
import User from './components/user/User.jsx'
import {Routes , Route} from 'react-router'
const App = () => {
  return (
  <>
  <Navbar />
  <Routes>
    <Route path="/" element={<Form/>} />
    <Route path="/user" element={<User/>} />
  </Routes>      
  </>
 
  )
}

export default App