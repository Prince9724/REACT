import React from 'react'
import "../productdetail/Detail.css"
import { useNavigate } from 'react-router'

const Detail = ({ name, des, price, image, addtocart }) => {
    const navigate = useNavigate();

    return (
        <div className='card-box'>

            <div className='card-content'>
                <img className='card-img mb-3' src={image} alt="" />

                <h4 className='d-flex justify-content-start'>
                    {name}
                </h4>

                <p className='price d-flex justify-content-start'>
                    price: {price}$
                </p>

                <p className='desc'>{des}</p>
            </div>

            <div className='card-btns'>
                <div className='d-flex'>
                    <button
                        className='btn cart-btn'
                        onClick={() => addtocart({ name, des, price, image, qty: 1 })}
                    >
                        Cart
                    </button>

                    <button
                        className='view-btn btn ms-2'
                        onClick={() => {
                            navigate("/view", { state: { name, des, price, image } })
                        }}
                    >
                        View
                    </button>
                </div>

                <button className='heart-btn'>❤️</button>
            </div>

        </div>
    )
}

export default Detail