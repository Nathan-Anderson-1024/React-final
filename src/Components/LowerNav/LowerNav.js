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
            <NavLink to="/search?name=Men">Men</NavLink>
          </li>
          <li>
            <NavLink to="/search?name=Women">Women</NavLink>
          </li>
          <li>
            <NavLink to="/search?name=gold">Accessories</NavLink>
          </li>
          <li>
            <NavLink to="/search?name=ssd">Tech</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
