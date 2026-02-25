import React, { useState , useEffect } from 'react'
import { product } from '../products';
const Counter = () => {
   const  [count, setcount] = useState(0);
 useEffect(()=>{
  countTotal();
 },[])
  const countTotal =()=>{
    let sum = 0;
    product.forEach((item)=>{
      sum = sum+item.price;
    })
    setcount(sum);
  }

  return (
    <>
    <div className='card'>
      <p className='count'>total:{count.toFixed(2)}</p>
    </div>
   {/* <div className='counter'>
    <h1 className='count'>{count.toFixed(2)}</h1>
   </div>
   <button className='btn' onClick={()=>{
    setcount(count +1)
   }}>++</button> */}
   </>
  )
}

export default Counter