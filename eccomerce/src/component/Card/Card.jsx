import React, { useEffect, useState } from 'react'
import "../Card/Card.css"
import { useNavigate } from 'react-router'
import axios from 'axios'
import Detail from '../productdetail/Detail'
const Card = () => {
    const [search, setsearch] = useState()
    const [cart, setcart] = useState([])
    const [check, setcheck] = useState(false)
    useEffect(() => {
        console.log("use effect")
        // handleChart();
        fetchProduct();
    }, [])

    // async function fetchProduct (){
    //     const res = await fetch("https://dummyjson.com/products");
    //     const data = await res.json();
    //     console.log(data)
    //         setcart(data.products);
    //     } 

    const fetchProduct = async () => {
        const res = await axios.get("https://dummyjson.com/products")
        setcart(res.data.products)
        
    }
    // const navigate = useNavigate();
    
    const handleChart = (product) => {
        console.log("++++")
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const res = cart.findIndex((e) => e.name == product.name);
        if (res == -1) {
            cart.push(product);
        }
        if (res != -1) {
            cart[res].qty++;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        // alert("Product is added to cart");
        // navigate("/cart")
    }
    const searchProduct = () => {
        console.log("search")
      const result =   cart.filter((product)=> product.title.toLowerCase().includes(search.toLowerCase()));
        setcart(result)
    }
    const LowHigh = () => {
  const arr = [...cart];//cart ko arr ke ander copy kiya hai 

  if (check) {//agar chaeck ki value true hoti hai to ye condition chlega 
    
    arr.sort((a, b) => a.price - b.price);
  } else {
     
    arr.sort((a, b) => b.price - a.price);
  }

  setcart(arr);    //arr jo jisme hmne cart ko stor kiya hai usko set card ke ander update kr rhe hai     
  setcheck(!check);   // check ki value ko false k ke setcheck ke ander bhej rhe hai  
};
    return (

        <div className='container-fluid'>
            <div className='d-flex p-3 justify-content-center'>
                <input onChange={(e)=>setsearch(e.target.value)} className='w-50' value={search||""} type="text" />
                <button className='btn btn-outline-light mx-3'onClick={searchProduct}>Add</button>
                <button className='btn btn-outline-danger ' onClick={()=>{
                    fetchProduct();
                    setsearch("");
                }}>reset</button>
                <button className='btn btn-outline-warning ms-3'onChange={(e) => setcheck(!check)} onClick={LowHigh}> {!check ? "Low To High" : "High To low"}</button>
            </div>
            <div className="container justify-content-center d-flex flex-wrap gap-3">
                {
                    cart.map((product, i) => (
                        <Detail key={i} name={product.title} image={product.images[0]} des={product.description}
                            price={product.price} addtocart={handleChart}
                        />
                    ))

                }
            </div>
        </div>
    )
}

export default Card

 