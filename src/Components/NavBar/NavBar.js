import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import Search from '../Search/Search'
import { useCart } from '../../Context/CartContext'

export default function NavBar() {
  const { cart } = useCart();
  const newCart = cart;
  return (
    <nav className='navbar'>
        <NavLink to='/' className='site-title'>eCommerceHut</NavLink>
        <ul>
          <li className='search-nav'>
            <Search />
          </li>
          <li>
            <NavLink to='/cart'>
              <i className="fa-solid fa-cart-shopping cart-icon">
                {cart.length > 0 && <div className='cart-number'>{newCart.reduce((acc, obj) => acc + obj.quantity, 0)}</div>}
              </i>
            </NavLink>
          </li>
        </ul>
    </nav>
  )
}
