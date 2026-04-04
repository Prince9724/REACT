import React, { useEffect, useState } from 'react'

const Task = () => {
    const [task, settask] = useState({
        title: "",
        description: "",
        status: "pending"
    })

    const [data, setdata] = useState([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("task")) || []
        setdata(saved)
    }, [])

    const handlesubmit = () => {
        if (!task.title || !task.description) return;

        const updated = [...data, task]
        setdata(updated)
        localStorage.setItem("task", JSON.stringify(updated))

        settask({
            title: "",
            description: "",
            status: "pending"
        })
    }

    const handleDelete = (index) => {
        const updated = data.filter((_, i) => i !== index)
        setdata(updated)
        localStorage.setItem("task", JSON.stringify(updated))
    }

    const getBorder = (status) => {
        if (status === "complete") return "border-success"
        if (status === "running") return "border-warning"
        return "border-danger"
    }

    return (
        <div className='container mt-5'>

            <div className='card p-4 shadow'>
                <div className='row g-3'>
                    <div className='col-md-4'>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Title'
                            value={task.title}
                            onChange={(e) => settask({ ...task, title: e.target.value })}
                        />
                    </div>

                    <div className='col-md-4'>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Description'
                            value={task.description}
                            onChange={(e) => settask({ ...task, description: e.target.value })}
                        />
                    </div>

                    <div className='col-md-2'>
                        <select
                            className='form-select'
                            value={task.status}
                            onChange={(e) => settask({ ...task, status: e.target.value })}
                        >
                            <option value="pending">Incomplete</option>
                            <option value="running">Running</option>
                            <option value="complete">Complete</option>
                        </select>
                    </div>

                    <div className='col-md-2'>
                        <button onClick={handlesubmit} className='btn btn-primary w-100'>
                            Add
                        </button>
                    </div>
                </div>
            </div>

            <div className='row mt-4'>
                {
                    data.map((item, i) => (
                        <div key={i} className='col-md-4 mb-3'>
                            <div className={`card p-3 border-3 ${getBorder(item.status)} shadow-sm`}>
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                                <span className='badge bg-dark text-capitalize'>{item.status}</span>

                                <button 
                                    onClick={() => handleDelete(i)} 
                                    className='btn btn-danger btn-sm mt-3'>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Task