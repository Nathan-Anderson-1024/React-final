import React from 'react'
import './Cart.css'
import { useContext } from 'react';
import { cartContext } from '../App/App';

export default function Cart(props) {
  //get cart data
  const cartValues = useContext(cartContext);
  return (
    <div className='cart-container'>
      <h1 className='cart-header'>Your Shopping Cart</h1>
      {cartValues.map((items, i) => {
        return  (
          <div className='item-container' key={i}>
            <div className='cart-img-container'>
              <img src={items.img} alt='item in cart'></img>
            </div>
            <div><p className='item'>{items.item}</p></div>
            <div className='quantity-container'>
              <p>Quantity</p>
              <p className='item'>{items.quantity}</p>
            </div>
            <div className='total-container'>
              <p>Total</p>
              <p>${items.price.toFixed(2) * items.quantity}</p>
            </div>
            
          </div>
        )
      })}
      <div className='order-summary-container'>
        <h2 className='order-summary'>Order Summary</h2>
        <div className='subtotal-container'>
          <h3>Subtotal:</h3>
          <h3>$10</h3>
          <h3>Shipping:</h3>
          <h3>FREE</h3>
          <h3>Estimated Tax:</h3>
          <h3>.07 * total</h3>
          <h3>Estimated Total:</h3>
          <h3>TOTAL</h3>
          <button className='checkout-button'>CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}
