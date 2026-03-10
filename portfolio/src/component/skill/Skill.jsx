import React from 'react'
import "../skill/skill.css"


const Skill = () => {
    return (
        <div className='hero container-fluide'>
            <div className='mt-4 container text-center d-flex flex-column align-items-center'>
                <h3 className='text-primary'>skill</h3>
                <div className=' mt-3 d-flex flex-wrap gap-3'>
                    <div style={{ height: 50, width: 200 }} className='skill-box  border-primary'>
                        <h4 className='skill'>c</h4>
                    </div>
                    <div style={{ height: 50, width: 200 }} className='skill-box '>
                        <h4 className='skill'>Html</h4>
                    </div>
                    <div style={{ height: 50, width: 200 }} className=' skill-box '>
                        <h4 className='skill'>CSS</h4>
                    </div>
                    <div style={{ height: 50, width: 200 }} className='skill-box '>
                        <h4 className='skill'> Bootstrap</h4>
                    </div>
                    <div style={{ height: 50, width: 200 }} className='skill-box y'>
                        <h4 className='skill'>Mediya Query</h4>
                    </div>
                    <div style={{ height: 50, width: 200 }} className='skill-box '>
                        <h4 className='skill'>JavaScript</h4>
                    </div>
                    <div style={{ height: 50, width: 200 }} className='skill-box '>
                        <h4 className='skill'>React</h4>
                    </div>
                    <div style={{ height: 50, width: 200 }} className='skill-box '>
                        <h4 className='skill'>Talwind</h4>
                    </div>
                </div>
                <hr className='bg-primary mt-5 w-100' style={{ height: 3 }} />

            </div>
        </div>
    )
}

export default Skill