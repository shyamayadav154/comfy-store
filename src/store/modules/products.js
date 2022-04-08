// Actions
import axios from 'axios'
const GET_PRODUCT_BEGIN = 'my-store/store/GET_PRODUCT_BEGIN'
const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
const GET_PRODUCT_ERROR = 'my-store/store/GET_PRODUCT_ERROR'

const GET_SINGLE_PRODUCT_BEGIN = 'GET_SINGLE_PRODUCT_BEGIN'
const GET_SINGLE_PRODUCT_SUCCESS = 'GET_SINGLE_PRODUCT_SUCCESS'
const GET_SINGLE_PRODUCT_ERROR = 'GET_SINGLE_PRODUCT_ERROR'

const SORT_BY = 'SORT_BY'

//reducer

const initialState = {
  loading: false,
  products: [],
  error: false,
  singleProduct: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_BEGIN:
      return { ...state, loading: true }

    case GET_PRODUCT_SUCCESS:
      return { ...state, products: payload, loading: false }

    case GET_PRODUCT_ERROR:
      return { ...state, loading: false, error: payload }
    case GET_SINGLE_PRODUCT_BEGIN:
      return { ...state, loading: true }

    case GET_SINGLE_PRODUCT_SUCCESS:
      return { ...state, singleProduct: payload, loading: false }

    case GET_SINGLE_PRODUCT_ERROR:
      return { ...state, loading: false, error: payload }

    

    default:
      return state
  }
}

//action creators

export function fetchProducts(url) {
  return async (dispatch) => {
    dispatch({ type: GET_PRODUCT_BEGIN })

    try {
      const { data } = await axios.get(url)

    
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({ type: GET_PRODUCT_ERROR, payload: error })
    }
  }
}



export const fetchSingleProduct = (url) => {

  return async (dispatch) => {
       dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })

       try {
         const { data } = await axios.get(url)

    
         dispatch({
           type: GET_SINGLE_PRODUCT_SUCCESS,
           payload: data,
         })
       } catch (error) {
         dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: error })
       }
  }
}
