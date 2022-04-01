import React from 'react'
import { Link } from 'react-router-dom'
import './breadCrumbs.styles.scss'

const BreadScrum = ({title,product}) => {
  return (
    <section className='breadScrumbs'>
      <div className='center'>
        <h3>
          <Link to='/'>Home</Link>
          {product && <Link to='/products'>/ Product</Link>} /{' '}
          <span className='title'>{title}</span>
        </h3>
      </div>
    </section>
  )
}

export default BreadScrum