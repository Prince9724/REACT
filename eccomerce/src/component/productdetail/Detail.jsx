import React from 'react'
import { useNavigate } from 'react-router'
const Detail = ({name , des, price, image ,key ,addtocart}) => {
    const navigate= useNavigate();
    return (
        <div className='Card' key={key}>
            <img className='mb-3' src={image} alt="" />
            <h4 className='d-flex justify-content-start' >{name} </h4>
            <p className='d-flex justify-content-start'>price: {price}$</p>
            <p>{des}</p>
            <div className='chart-btn'>
                <div className='d-flex'>
                    <button className='btn btn-success' onClick={() => addtocart({name , des, price, image , qty:1})}>Cart</button>
                    <button className='veiw ms-2 btn btn-secondary'onClick={()=>{   
                        navigate("/view ",{state : {name , des, price, image}})
                    }}>veiw </button>
                </div>
                <button className='heart-btn'>❤️</button>
            </div>
        </div>
    )
}

export default Detail