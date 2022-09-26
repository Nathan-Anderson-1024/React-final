import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav className='navbar'>
        <NavLink to='/' className='site-title'>Site</NavLink>
        <ul>
            <li>
                <NavLink to='/'>Products</NavLink>
            </li>
            <li>
                <NavLink to='/cart'>Cart</NavLink>
            </li>
        </ul>
    </nav>
  )
}
