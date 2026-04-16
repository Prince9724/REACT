import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increament,decreament } from '../slice/Counter-Slice.js'

const Counter = () => {
    const data = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={()=>dispatch(increament())}>++</button>
        <button onClick={()=>dispatch(decreament())}>--</button>
    </div>
  )
}

export default Counter