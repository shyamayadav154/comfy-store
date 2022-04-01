import React from 'react'
import './sort.styles.scss'
import { updateSort } from '../../store/modules/filter.js'


const Sort = ({ dispatch, sort }) => {
  const changeHandler = (e) => {
    e.preventDefault()

    dispatch(updateSort(e.target.value))

  }

  return (
    <form className='sort'>
      <label htmlFor='sort'> </label>
      <select
        name='sort'
        id='sort'
        className='sort-input'
        value={sort}
        onChange={changeHandler}
      >
        <option value='price-lowest'>price (lowest)</option>
        <option value='price-highest'>price (highest)</option>
        <option value='name-a'>name (a-z)</option>
        <option value='name-z'>name (z-a)</option>
      </select>
    </form>
  )
}

export default Sort
