import React, { useState } from 'react'

const Cart = () => {
  const [carts, setcarts] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const remove =()=>{
    const arr = [...carts]
    arr.splice(0,1);
    localStorage.setItem("cart",JSON.stringify(arr));
    setcarts(arr);
    console.log("++")
  }
  return (
    <div>
      {
        carts.map((product) => (
          <div className="container mt-5">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={product.images[0]} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.title} </h5>
                    <p className="card-text">
                      {product.description}
                    </p>
                    <div className='d-flex justify-content-around'>
                      <p className="card-text">
                     price : {product.price}/-
                    </p>
                    <button onClick={remove} className='btn btn-primary'>
                      remove
                    </button>
                    </div>
                    <p className="card-text">
                      <small className="text-body-secondary"> </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </div>



        ))
      }
    </div>
  )
}

export default Cart