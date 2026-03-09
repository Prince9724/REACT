import React from 'react'
import "../skill/skill.css"


const Skill = () => {
  return (
    <div className='mt-4 container text-center d-flex flex-column align-items-center'>
           <h3 className='text-primary'>skill</h3> 
        <div  className=' mt-3 d-flex flex-wrap gap-3'>
            <div style={{height:50, width: 200 }} className='skill d-flex align-items-center justify-content-center  border rounded border-primary'>
                <h4>c</h4>
             </div>
             <div style={{height:50, width: 200 }} className='skill d-flex align-items-center justify-content-center border rounded border-primary'>
                <h4>Html</h4>
             </div>
             <div style={{height:50, width: 200 }} className='skill d-flex align-items-center justify-content-center border rounded border-primary'>
                <h4>CSS</h4>
             </div>
             <div style={{height:50, width: 200 }} className='skill d-flex align-items-center justify-content-center border rounded border-primary'>
                <h4>Bootstrap</h4>
             </div>
             <div style={{height:50, width: 200 }} className='skill d-flex align-items-center justify-content-center  border rounded border-primary'>
                <h4>Mediya Query</h4>
             </div>
             <div style={{height:50, width: 200 }} className='skill d-flex align-items-center justify-content-center border rounded border-primary'>
                <h4>JavaScript</h4>
             </div>
             <div style={{height:50, width: 200 }} className='skill d-flex align-items-center justify-content-center border rounded border-primary'>
                <h4>React</h4>
             </div>
             <div style={{height:50, width: 200 }} className='skill d-flex align-items-center justify-content-center border rounded border-primary'>
                <h4>Talwind</h4>
             </div>
        </div>
    <hr className='bg-primary mt-5 w-100' style={{height:3}} />

    </div>
  )
}

export default Skill