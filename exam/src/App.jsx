 import React from 'react'
import Task from './components/task'
import {Routes , Route} from 'react-router'
import Display from './components/display'
 
 const App = () => {
   return (
      <>
        <Task/>
        <Routes>
          <Route path ="" element= <Display /> />
        </Routes>
      </>
   )
 }
 
 export default App