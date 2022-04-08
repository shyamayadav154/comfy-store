import React,{useEffect} from 'react'
import './filter.styles.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getUniqueValues } from '../../utils/utils'
import {
  updateFilter,
  filterProduct,
  clearFilter,
  getFilteredProduct,
} from '../../store/modules/filter'
import {FaCheck} from 'react-icons/fa'
import { formatPrice } from '../../utils/utils'
import Button from '../button/button.componet.jsx'
import { fetchProducts } from '../../store/modules/products'

const Filter = () => {
  const dispatch = useDispatch()
  const {products} = useSelector((state)=>state.products)
  const { all_products, filters } = useSelector((state) => state.filters)

  const {
    text,
    category,
    company,
    color,
    min_price,
    price,
    max_price,
    shipping,
  } = filters

  const data = useSelector((state) => state.filters)


useEffect(()=>{
 
  
    dispatch(filterProduct())
},[filters])

useEffect(()=>{
 
   dispatch(getFilteredProduct(products))
},[])

  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value

    if (name === 'category') {
      value = e.target.textContent
    }
    if (name === 'color') {
      value = e.target.dataset.color
    }
    if (name === 'price') {
      value = Number(value)
    }
    if (name === 'shipping') {
      value = e.target.checked
    }
        let data = { name, value }
    //  dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
    dispatch(updateFilter(data))
  }
  const clearFilters = () => {
    dispatch(clearFilters())
  }

  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')

  return (
    <div>
      <div className='content'>
        <form action='' onSubmit={(e) => e.preventDefault()}>
          {/* search */}
          <div className='form-control'>
            <input
              type='text'
              name='text'
              placeholder='search'
              className='search-input'
              value={text}
              onChange={updateFilters}
            />
          </div>

          {/* categories */}
          <div className='form-control'>
            <h5>Category</h5>
            <div>
              {categories.map((cat, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='category'
                    className={`${
                      category === cat.toLowerCase() ? 'active' : null
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
            {/* companies */}
            <div className='form-control'>
              <h5>company</h5>
              <select
                name='company'
                value={company}
                onChange={updateFilters}
                className='company'
              >
                {companies.map((company, index) => {
                  return (
                    <option key={index} value={company}>
                      {company}
                    </option>
                  )
                })}
              </select>
            </div>
            {/* colors */}
            <div className='form-control'>
              <h5>colors</h5>
              <div className='colors'>
                {colors.map((c, index) => {
                  if (c === 'all') {
                    return (
                      <button
                        key={index}
                        name='color'
                        onClick={updateFilters}
                        data-color='all'
                        className={`${
                          color === 'all' ? 'all-btn active' : 'all-btn'
                        }`}
                      >
                        all
                      </button>
                    )
                  }
                  return (
                    <button
                      key={index}
                      name='color'
                      style={{ background: c }}
                      className={`${
                        color === c ? 'color-btn active' : 'color-btn'
                      }`}
                      data-color={c}
                      onClick={updateFilters}
                    >
                      {color === c ? <FaCheck /> : null}
                    </button>
                  )
                })}
              </div>
            </div>
            <div className='form-control'>
              <h5>price</h5>
              <p className='price'>{formatPrice(price)}</p>
              <input
                type='range'
                name='price'
                min={min_price}
                max={max_price}
                onChange={updateFilters}
                value={price}
              />
            </div>
            <Button onClick={() => dispatch(clearFilter())}>Clear filter</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Filter
