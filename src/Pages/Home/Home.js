import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
export default function Home() {
  return (
    <>
        <nav className='navbar-bottom'>
            <ul className='nav-ul'>
                <li>
                    <NavLink to='/products'>All Products</NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>Men</NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>Women</NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>Accessories</NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>Tech</NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>Cart</NavLink>
                </li>
            </ul>
        </nav>
    </>
  )
}
