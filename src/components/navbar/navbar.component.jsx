import React from 'react'
import './navbar.styles.scss'

import { useNavigate, NavLink } from 'react-router-dom'
import CartIcon from '../cart-icon/cart-icon.compontn'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav>
      <div className='nav-container'>
        <div onClick={() => navigate('/')} className='brand'>
          COMFY
        </div>

        <div className='links'>
          <ul>
            <li>
              <NavLink to='/products'>products</NavLink>
            </li>

            <li>
              <NavLink to='/about'>about</NavLink>
            </li>
            <li>
              <NavLink to='/sign-in'>sign in</NavLink>
            </li>
            <li>
              <NavLink to='/cart'>
                <CartIcon />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
