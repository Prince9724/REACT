import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increament,decreament,into ,zero } from '../slice/Counter-Slice.js'
import "../component/counter.css"
const Counter = () => {
    const data = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();
  return (
    <div className="main">
  <div className="card">
    <h1 className="value">{data}</h1>

    <div className="buttons">
      <button className="btn inc" onClick={() => dispatch(increament())}>+</button>
      <button className="btn dec" onClick={() => dispatch(decreament())}>-</button>
      <button className="btn mul" onClick={() => dispatch(into())}>× 2</button>
      <button className="btn reset" onClick={() => dispatch(zero())}>Reset</button>
    </div>
  </div>
</div>
 )
}

export default Counter