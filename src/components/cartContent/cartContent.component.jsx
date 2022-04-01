import React from 'react'
import './cartContent.styles.scss'
import styled from 'styled-components'
import { formatPrice } from '../../utils/utils'

import { addToCart,removeFromCart,clearFromCart } from '../../store/modules/cart'
import { useDispatch } from 'react-redux'

const CartContent = ({cartItem}) => {
    console.log(cartItem);
    const dispatch = useDispatch()
    
    const { name, images, price, quantity } = cartItem
    const imageUrl = images[0]?.url

    const removeItemHandler = ()=>{}
    const addItemHandler = () => {}
    const clearItemHandler = () => {}
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={()=>dispatch(removeFromCart(cartItem.id))}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={()=>dispatch(addToCart(cartItem))}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{ formatPrice(price*quantity)}</BaseSpan>
    
    </CheckoutItemContainer>
  )
}


export const CheckoutItemContainer = styled.article`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  @media only screen and (max-width: 768px) {
    font-size:16px;
  }
  align-items: center;
  justify-content:space-between;
  text-transform:capitalize;
`

export const ImageContainer = styled.div`
  width: 23%;
 margin-right:3rem;
  img {
    width: 100%;
    height: 100%;
  }
`

export const BaseSpan = styled.span`
  width: 23%;
`

export const Quantity = styled(BaseSpan)`
  display: flex;

  margin-left:4rem;
`

export const Arrow = styled.div`
  cursor: pointer;
`

export const Value = styled.span`
  margin: 0 10px;
`

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`

export default CartContent