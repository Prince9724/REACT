import React from 'react'
import clours from './script.js'
import fruits from './script.js'
import vegetable  from './script.js'
const App = () =>  
{
  return <>
   {clours.map(color=><p>{color}</p>)}
   {vegetable.map(v=><p>{v}</p>)}
   {fruits.map(f=><p>{f}</p>)}
   </>
}
 

export default App