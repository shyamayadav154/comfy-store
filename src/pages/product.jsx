import React, { useEffect } from 'react'
import { fetchProducts } from '../store/modules/products.js'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../components/productCard/productCard.component.jsx'
import styled from 'styled-components'
import Sort from '../components/sort/sort.compoent.jsx'
import { useNavigate } from 'react-router-dom'
import BreadScrum from '../components/breadCrumbs/breadCrumbs.component.jsx'
import Filter from '../components/filter/filter.component.jsx'
import { motion } from 'framer-motion'

const url = 'https://course-api.com/react-store-products'

const Products = () => {
  const dispatch = useDispatch()
  const { loading, products: prod } = useSelector((state) => state.products)
  const { filtered_products: products, all_products } = useSelector(
    (state) => state.filters
  )

  const sort = useSelector((state) => state.sortby)

  

  useEffect(() => {
    if(all_products.length < 1){

      dispatch(fetchProducts(url))
    }

    window.scroll(0,0)
  }, [])

  if (loading) return <div className='loading'></div>

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <BreadScrum title='Products' />

      <ProductContainer>
        <Filter />
        <div className='main-container'>
          <SortByContainer>
            <Sort dispatch={dispatch} sort={sort} />
          </SortByContainer>
          <Container>
            {products.length ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <h5 style={{ textTransform: 'none' }}>
                Sorry, no products matched your search...
              </h5>
            )}
          </Container>
        </div>
      </ProductContainer>
    </motion.div>
  )
}

export default Products

const ProductContainer = styled.div`
  padding-left: 7.5vw;
  padding-right: 7.5vw;
  padding-top: 1rem;
  gap: 1rem;
  margin: 0 auto;
  display: flex;
  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 700px) {
    padding-left: 2.5vw;
    padding-right: 2.5vw;
    flex-direction: column;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 250px;
  gap: 10px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const SortByContainer = styled.div`
  font-size: 1.25rem;
`
