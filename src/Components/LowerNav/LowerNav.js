import React from "react";
import { NavLink } from "react-router-dom";
import './LowerNav.css'
export default function LowerNav() {
  return (
    <>
      <nav className="navbar-bottom">
        <ul className="nav-ul">
          <li>
            <NavLink to="/products">All Products</NavLink>
          </li>
          <li>
            <NavLink to="/products/mens">Men's Clothing</NavLink>
          </li>
          <li>
            <NavLink to="/products/womens">Women's Clothing</NavLink>
          </li>
          <li>
            <NavLink to="/products/jewelery">Jewelery</NavLink>
          </li>
          <li>
            <NavLink to="/products/electronics">Electronics</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
