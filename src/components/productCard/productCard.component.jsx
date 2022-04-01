import React from 'react'
import './productCard.styles.scss'
import { useNavigate } from 'react-router-dom'
import { formatPrice } from '../../utils/utils'
const ProductCard = ({product,type}) => {
  const navigate = useNavigate()

    const {id,name,price,image,} = product

  return (
    <article
      onClick={() => navigate(`/products/${product.id}`)}
      className='card'
    >
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='container'>
      
          <h5> {name}</h5>
       
        <p className='price'>{formatPrice(price)}</p>
      </div>
    </article>
  )
}

export default ProductCard