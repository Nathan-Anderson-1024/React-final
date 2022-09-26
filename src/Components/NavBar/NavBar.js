import React from 'react'
import './NavBar.css'
export default function NavBar() {
  return (
    <nav className='navbar'>
        <a href='/' className='site-title'>Site</a>
        <ul>
            <li>
                <a href='/products'>Products</a>
            </li>
            <li>
                <a href='/cart'>Cart</a>
            </li>
        </ul>
    </nav>
  )
}
