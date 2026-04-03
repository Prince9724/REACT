import React from 'react'
import Navbar from './component/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Card from './component/Card/Card'
import Cart from './component/Cart/Cart'
import View from './component/veiw/View'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/view' element={<View />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </div>
  )
}

export default App