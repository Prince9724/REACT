import React from 'react'
import { useLocation } from 'react-router'

const View = () => {
    const { state } = useLocation();
    return (
        <div>
            <h1 className='text-white'>veiw</h1>
            <div className="container w-100 d-flex justify-content-center ">
                <div className="card mb-3 w-100 d-flex justify-content-center" style={{ maxWidth: 640 }}>
                    <div className=' w-100 flex-column align-items-center d-flex justify-content-center'>
                        <div className="col-md-4 d-flex justify-content-center">
                            <img src={state.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="row g-0">

                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{state.name} </h5>
                                    <p className="card-text">
                                        {state.des}
                                    </p>
                                    <div className='d-flex justify-content-around'>
                                        <p className="card-text">
                                            price : {state.price}$
                                        </p>

                                    </div>
                                    <p className="card-text">
                                        <small className="text-body-secondary"></small>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className='w-100 d-flex justify-content-center p-3'>
                            <button onClick={() => remove(i)} className='btn btn-outline-success w-75'>
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default View