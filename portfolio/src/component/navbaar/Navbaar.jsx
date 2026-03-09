import React from 'react'

const Navbaar = () => {
    return (
        <div>
            <nav class="navbar sticky-top bg-body-tertiary">
                <div class="container-fluid d-flex  justify-content-around">
                    <a class="navbar-brand" href="#">Prince Gond</a>
                    <div className=' d-flex gap-3 justify-content-center'>
                        <a href="" className='text-decoration-none'>Home</a>
                        <a href="" className='text-decoration-none'>About</a>
                        <a href="" className='text-decoration-none'>Education</a>
                        <a href="" className='text-decoration-none'>Project</a>
                        <a href="" className='text-decoration-none'>Skill</a>
                        <a href="" className='text-decoration-none'>Contact</a>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbaar