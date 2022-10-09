import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import Search from '../Search/Search'
export default function NavBar() {
  return (
    <nav className='navbar'>
        <NavLink to='/' className='site-title'>Site</NavLink>
        <ul>
          <li className='search-nav'>
            <Search />
          </li>
          {/* <li>
              <NavLink to='/products'>Products</NavLink>
          </li> */}
          <li>
            <NavLink to='/cart'>
              <i class="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </li>
        </ul>
    </nav>
  )
}
