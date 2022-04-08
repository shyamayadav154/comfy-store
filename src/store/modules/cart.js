//actions constant

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE = 'REMOVE'
const CLEAR = 'CLEAR'
const CART_TOTAL = 'CART_TOTAL'
const CART_TOGGLE = 'CART_TOGGLE'

//reducer

const initialState = {
    cartProducts:[],
    total_items:0,
    total_amount:0,
    isCartOpen:false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_TO_CART:{
        const existingCartItem = state.cartProducts.find((cartItem)=>cartItem.id === payload.id)
        if(existingCartItem){
            const newCartItem = state.cartProducts.map((cartItem)=>{
              if(cartItem.id === payload.id){
                return {...cartItem,quantity:cartItem.quantity + 1}
              }else{
                 return cartItem
              }
            })
            return {...state,cartProducts:newCartItem}
        }
        else{
                const newCartItem = { ...payload, quantity: 1 }
                return {
                  ...state,
                  cartProducts: [...state.cartProducts, newCartItem],
                }
        }
        
  }

  case CLEAR:

    const newCartItems = state.cartProducts.filter((cartItem)=>cartItem.id !== payload)
      return {...state,cartProducts:newCartItems}


  case REMOVE:
         const existingCartItem = state.cartProducts.find(
           (cartItem) => cartItem.id === payload
         )
         if(existingCartItem.quantity === 1){
            const newCartItems = state.cartProducts.filter(
              (cartItem) => cartItem.id !== payload
            )
            return { ...state, cartProducts: newCartItems }
         }
         const newCart = state.cartProducts.map((cartItem)=>cartItem.id===payload?{...cartItem,quantity:cartItem.quantity - 1}:cartItem)

    return {...state,cartProducts:newCart}


    case CART_TOTAL:{
       
        const {total_items,total_amount} = state.cartProducts.reduce((total,cartItem)=>{
            const {quantity,price} = cartItem
            
            total.total_items += quantity;
            total.total_amount += price*quantity;
            return total
        },{total_items:0,total_amount:0})
        
        return {...state,total_items,total_amount}
    }

    case CART_TOGGLE:
      return {...state, isCartOpen:payload}


  default:
    return state
  }
}

//action creator

export const addToCart = (product)=>{

    return {type:ADD_TO_CART,payload:product}
    
}

export const removeFromCart =(id)=>{
    return {type:REMOVE,payload:id}
}

export const clearFromCart = (id)=>{
    return {type:CLEAR,payload:id}
}

export const cartTotal = ()=>{
    return {type:CART_TOTAL}
}

export const toggleCart=(value)=>{
  return {type:CART_TOGGLE,payload:value}
}