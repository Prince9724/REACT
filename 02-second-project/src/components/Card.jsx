import { product } from '../products.js';
const Card = () => {
  return (
    <>
      {
        product.map((item, i) =>
           
            <div className='card' key={product.id}>
              <img className='product-img' src={product[i].images} alt="" />
              <p className='title'>{product[i].title}</p>
              <p className='price'>price- {product[i].price}-/</p>

            </div>
           
        )
      }
    </>
  )
}

export default Card