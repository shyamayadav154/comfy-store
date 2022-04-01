import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import productReducer from './modules/products'
import cartReducer from './modules/cart'
import filterReducer from './modules/filter'

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  filters:filterReducer
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
