// Action constant

const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
const UPDATE_FILTERS = 'UPDATE_FILTERS'
const FILTER_PRODUCTS = 'FILTER_PRODUCTS'
const CLEAR_FILTERS = 'CLEAR_FILTERS'
const SORT_BY = 'SORT_BY'
const TEST = 'TEST'

//reducers
const initialState = {
  filtered_products: [],
  all_products: [],
  sortby: 'price-lowest',
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCTS: {
      let maxPrice = payload.map((p) => p.price)
      maxPrice = Math.max(...maxPrice)

      return {
        ...state,
        all_products: [...payload],
        filtered_products: [...payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      }
    }

    case UPDATE_FILTERS:
      const { name, value } = payload
      return { ...state, filters: { ...state.filters, [name]: value } }

    case FILTER_PRODUCTS: {
      const { all_products } = state
      const { text, category, company, color, price, shipping } = state.filters

      let tempProducts = [...all_products]
      if (text) {
        tempProducts = tempProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(text)
        })
      }
      if (category !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.category === category
        )
      }
      if (company !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.company === company
        )
      }
      if (color !== 'all') {
        tempProducts = tempProducts.filter((product) => {
          return product.colors.find((c) => c === color)
        })
      }
      tempProducts = tempProducts.filter((product) => product.price <= price)
      if (shipping) {
        tempProducts = tempProducts.filter(
          (product) => product.shipping === true
        )
      }
      return { ...state, filtered_products: tempProducts }
    }

    case SORT_BY: {
      let tempProducts = [...state.filtered_products]

      let filteredProducts = []
      if (payload === 'price-lowest') {
        filteredProducts = tempProducts.sort(
          (product, nextProduct) => product.price - nextProduct.price
        )
      }
      if (payload === 'price-highest') {
        filteredProducts = tempProducts.sort(
          (product, nextProduct) => nextProduct.price - product.price
        )
      }
      if (payload === 'name-a') {
        filteredProducts = tempProducts.sort((product, nextProduct) =>
          product.name.localeCompare(nextProduct.name)
        )
      }
      if (payload === 'name-z') {
        filteredProducts = tempProducts.sort((product, nextProduct) =>
          nextProduct.name.localeCompare(product.name)
        )
      }
      return { ...state, filtered_products: filteredProducts, sortby: payload }
    }

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          company: 'all',
          category: 'all',
          color: 'all',
          price: state.filters.price,
          shipping: false,
        },
      }

    default:
      return state
  }
}

// actions
export const clearFilter = () => ({
  type: CLEAR_FILTERS,
})

export function updateSort(value) {
  return { type: SORT_BY, payload: value }
}

export const getFilteredProduct = (product) => ({
  type: LOAD_PRODUCTS,
  payload:product
})

export const updateFilter = (value) => ({
  type: UPDATE_FILTERS,
  payload: value,
})

export const filterProduct = (value) => ({
  type: FILTER_PRODUCTS,
  payload: value,
})
