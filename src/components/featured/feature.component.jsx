import React, { useEffect } from 'react'
import './feature.styles.scss'
import { fetchProducts } from '../../store/modules/products'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../productCard/productCard.component.jsx'
import Button from '../button/button.componet.jsx'

const url = 'https://course-api.com/react-store-products'

const Feature = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.products)
  console.log(products)

  useEffect(() => {
    dispatch(fetchProducts(url))
  }, [])

  return (
    <section className='feature'>
      <div className='title'>
        <h1>Featured Products</h1>
        <div className='underline'></div>
      </div>

      <div className='container'>
        {products.length &&
          products?.map((product, index) => {
            if (index > 3 && index < 7)
              return <ProductCard key={product.id} product={product} />
          })}
      </div>
      <Button onClick={() => navigate(`/products`)}>Show all</Button>
    </section>
  )
}

export default Feature
