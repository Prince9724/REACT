import React, { useState, useEffect } from 'react'
import "../Cart/Cart.css"

const Cart = () => {

  const [carts, setcarts] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [total, settotal] = useState(0);
  useEffect(() => {
    const cartprice = carts.reduce((acc, item) => {
      return acc + item.price * item.qty;
    }, 0);

    settotal(cartprice);
  }, [carts]);

  const incrementQty = (index) => {
    const updatedCart = [...carts]; //phale ham copy bnaate hai usko updateedCard ke ander store kr rhe hai 

    updatedCart[index].qty += 1;//updateedCart ki index pr jo qty hia usme ++ krve rhe hai 

    setcarts(updatedCart); // fir usko usestate ke ander update kr rhe hai setcart ke ander 
    localStorage.setItem("cart", JSON.stringify(updatedCart));//fir usko localstorage pr set kr rhe hai 
  };

  const decrementQty = (index) => {
    const updatedCart = [...carts];

    if (updatedCart[index].qty > 1) {
      updatedCart[index].qty -= 1;
    }
    setcarts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };


  const remove = (i) => {
    const arr = [...carts];
    arr.splice(i, 1);

    setcarts(arr);
    localStorage.setItem("cart", JSON.stringify(arr));
  };

  return (
    <div className='container-fluid d-flex justify-content-center'>

      <div className='bg-success w-25'>
        <h3 className='text-white mt-4 text-center'>
          Total : {total.toFixed(2)}$
        </h3>
      </div>

      <div className='cart-container container mt-5'>
        {
          carts.map((product, i) => (
            <div key={i} className="mb-4">

              <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">

                  <div className="col-md-4">
                    <img src={product.image} className="img-fluid rounded-start" alt="" />
                  </div>

                  <div className="col-md-8">
                    <div className="card-body">

                      <h5>{product.name}</h5>
                      <p>{product.des}</p>

                      <div className='d-flex justify-content-around'>

                        <p>Price: {product.price}$</p>

                        <p>
                          <button onClick={() => decrementQty(i)}>-</button>

                          <span className='mx-2'>Qty: {product.qty}</span>

                          <button onClick={() => incrementQty(i)}>+</button>
                        </p>

                        <button onClick={() => remove(i)} className='btn btn-outline-danger'>
                          remove
                        </button>

                      </div>

                    </div>
                  </div>

                </div>
              </div>

            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Cart