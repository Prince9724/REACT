import React from 'react'

const Task = () => {
    return (
        <div className='container-fluid'>
            <div className="container">
                <div>
                    <input type="text" />
                    <input type="text" />
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Select Your status</option>
                        <option value="1">Complete</option>
                        <option value="2">Running</option>
                        <option value="3">Pending</option>
                    </select>
                    <button className='btn btn-primary'>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Task