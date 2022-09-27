import React from 'react'
import './Cart.css'
import { useContext } from 'react';
import { cartContext } from '../App/App';

export default function Cart(props) {
  const cartValues = useContext(cartContext);
  return (
    <div className='cart-container'>
      <h1 className='cart-header'>Your Shopping Cart</h1>
      {cartValues.map((items, i) => {
        return  (
          <div className='item-container' key={i}>
            <div><p className='item'>{items.item}</p></div>
            <div className='quantity-container'>
              <p>Quantity</p>
              <p className='item'>{items.quantity}</p>
            </div>
          </div>
        )
      })}
      
    </div>
  )
}
