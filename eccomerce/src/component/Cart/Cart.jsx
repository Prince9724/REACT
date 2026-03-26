import React, { useState } from 'react'

const Cart = () => {
const [carts, setcarts] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  return (
    <div>
       {
        carts.map((product)=>(
          <div className="container">
            <h1 className='bg-white'>{product.title}</h1>
            
          </div>
           
         
          
        ))
       }
    </div>
  )
}

export default Cart