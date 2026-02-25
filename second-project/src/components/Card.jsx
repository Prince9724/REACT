import { product } from '../products.js';
const Card = () => {
  return (
    <>
    {
      product.map((item,i)=> <div className='card' key={product.id}>
        
          <p className='title'>{product[i].title}</p>
        <p className='price'>{product[i].price}</p>

      </div>)
    }
    </>
  )
}

export default Card