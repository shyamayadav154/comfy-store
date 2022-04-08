import React, { useEffect } from 'react'
import './singleProduct.styles.scss'
import { fetchSingleProduct } from '../../store/modules/products.js'
import {addToCart} from '../../store/modules/cart'
import styled from 'styled-components'
import { cartTotal } from '../../store/modules/cart'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ProductImages from '../productImages/productImages.componetn.jsx'
import Button from '../button/button.componet.jsx'
import BreadScrum from '../breadCrumbs/breadCrumbs.component.jsx'
import { motion } from 'framer-motion'
import {useNavigate} from 'react-router-dom'
const url = 'https://course-api.com/react-store-single-product?id='

const SingleProduct = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()

  const { loading, singleProduct: product } = useSelector((state) => state.products)
  const {cartProducts} = useSelector(state=>state.cart) 

  const checkInCart = cartProducts.find(product=>product.id === id)?true:false
  



  useEffect(() => {
    dispatch(fetchSingleProduct(`${url}${id}`))
   
    window.scroll(0,0)
  }, [id])

  useEffect(()=>{
    dispatch(cartTotal())
  },[cartProducts])

  if (loading) return <div className="loading"></div>
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <BreadScrum title={name} product />
      <Wrapper>
        <Center>
          <Button onClick={()=>navigate('/products')} > &#60; BACK TO PRODUCTS</Button>
          <div className=' product-center'>
            <ProductImages images={images} />
            <section className='contents'>
              <h2>{name}</h2>

              <p className='desc'> {description}</p>
              <p className='info'>
                <span>Available : </span>
                {stock > 0 ? 'In stock' : 'out of stock'}
              </p>

              <p className='info'>
                <span>Brand : </span>
                {company}
              </p>
              <hr />
              <div className='btn-container'>
                {!checkInCart ? (
                  <Button
                    disabled={checkInCart || !stock}
                    onClick={() => dispatch(addToCart(product))}
                  >
                    {stock ? 'Add To Cart' : 'Out Of Stock'}
                  </Button>
                ) : (
                  <Button onClick={() => navigate('/cart')}>Go To Cart</Button>
                )}
              </div>
            </section>
          </div>
        </Center>
      </Wrapper>
    </motion.div>
  )
}

const Wrapper = styled.main`
  padding: 3rem 0;


  .product-center {
    @media only screen and (max-width: 768px) {
      flex-direction:column;
    }
    display: flex;
    gap: 4rem;
    margin-top: 2rem;

    .contents {
      align-self: flex-start;
    }
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  .btn-container {
    margin-top: 2rem;
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

const Center = styled.div`
width:80vw;
margin:0 auto;


`

export default SingleProduct
