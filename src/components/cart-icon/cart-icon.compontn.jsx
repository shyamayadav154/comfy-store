import React from 'react'
import './cart-icon.styles.scss'
//  import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag-svgrepo-com.svg'
import ShoppingIcon from '../../assets/shopping-bag-svgrepo-com.svg'
import { useSelector } from 'react-redux'
const CartIcon = () => {
    const {total_items,isCartOpen}= useSelector(state=>state.cart)
   

  return (
    <div className='cart-icon-container'>
            {/* <ShoppingIcon className='shopping-icon'/> */}
            <img src={ShoppingIcon} alt="" className="shopping-icon" />
            <span className="item-count">{total_items}</span>
    </div>
  )
}

export default CartIcon