import React from 'react'
import { useLocation } from 'react-router'

const View = () => {
    const {state} = useLocation();
  return (
    <div>
        <h1 className='text-white'>veiw</h1>
        <p>{state.name}</p>
    
    </div>
  )
}

export default View