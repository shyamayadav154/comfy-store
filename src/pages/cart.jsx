import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartContent from '../components/cartContent/cartContent.component.jsx'

import { cartTotal } from '../store/modules/cart'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import BreadScrum from '../components/breadCrumbs/breadCrumbs.component.jsx'
import { formatPrice } from '../utils/utils'

const Cart = () => {
  const dispatch = useDispatch()
  const { cartProducts, total_items, total_amount } = useSelector(
    (state) => state.cart
  )

  useEffect(() => {
    dispatch(cartTotal())
  }, [cartProducts])


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <BreadScrum title='Cart' />
      <CheckoutContainer>
        <CheckoutHeader>
          <HeaderBlock>
            <span>Product</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Description</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Quantity</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Price</span>
          </HeaderBlock>
         
        </CheckoutHeader>
        {cartProducts.map((item) => {
          return <CartContent key={item.id} cartItem={item} />
        })}
        <Total>Total: { formatPrice(total_amount)}</Total>
      </CheckoutContainer>
    </motion.div>
  )
}

export const CheckoutContainer = styled.section`
  width: 60%;
  padding-bottom:3rem;
@media only screen and (max-width: 768px) {
  width:90%;
  margin:0 auto;
}
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  @media only screen and (max-width: 768px) {
    font-size:2rem;
  }
`

export default Cart
