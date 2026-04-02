import React, { useState, useEffect} from 'react'

const Cart = () => {
  const [carts, setcarts] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [total, settotal] = useState(0);
  const remove = (i) => {
    const arr = [...carts]
    arr.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(arr));
    setcarts(arr);
    console.log("++")
  }
  useEffect(()=>{
    console.log("----")
    totalprice();
  },[])

  const totalprice =()=>{
   const cartprice =  carts.reduce((a,b)=>a.price + b.price);
   settotal(cartprice); 
  }
 
//   const Totalprice = ()=>{
// //  const price  = total + carts.price;
// //   settotal(price)
// //   }
  return (
    <div className='container-fluid d-flex  flex-wrap justify-content-center '>
      {
       carts.map((product, i) => (
          <div key={i} className="container mt-5 ">
            <div>
              <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={product.image} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.name} </h5>
                      <p className="card-text">
                        {product.des}
                      </p>
                      <div className='d-flex justify-content-around'>
                        <p className="card-text">
                          price : {product.price}$
                        </p>
                        <p>
                          Qyt :{product.qty}
                        </p>
                        <button onClick={() => remove(i)} className='btn btn-primary'>
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

          </div>

        ))
      }
      <div>
        <p className='text-white'>Total: {total} </p>
      </div>
     
        
      
    </div>
  )
}

export default Cart