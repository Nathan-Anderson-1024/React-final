import React from 'react'
import './Cart.css'
import { useContext, useState, useEffect } from 'react';
import { cartContext } from '../App/App';

export default function Cart(props) {
  // total cost state for each item
  const [totalCost, setTotalCost] = useState([]);
  //total for the whole order
  const [subtotal, setSubtotal] = useState(0)
  //get cart data
  const cartValues = useContext(cartContext);
  //console.log(quantity)
  //const itemTotals = cartValues.forEach(item => item.quantity * item.price)

  // Update subtotal
  // useEffect(() => {
  //   for (let item of cartValues) {
  //     const totalItemCost = item.quantity * item.price
      
  //     setTotalCost((previousState) => [...previousState, totalItemCost]);
  //   }
  //   if (!totalCost) return;
  //   const newTotal = [...totalCost];
  //   const newSubtotal = newTotal.reduce((previousValue, currentValue) => previousValue + currentValue)
  //   setSubtotal(newSubtotal);
  // }, [totalCost, cartValues])


  // const itemTotals = (event) => {
  //   console.log(event.target.value)
  //   for (let item of cartValues) {
  //     const totalItemCost = event.target.value * item.price
      
  //     setTotalCost((previousState) => [...previousState, totalItemCost]);
  //   }
  //   if (!totalCost) return;
  //   const newTotal = [...totalCost];
  //   const newSubtotal = newTotal.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  //   setSubtotal(newSubtotal);
  //   //console.log(subtotal)
  // }
  
  // const handleUserQuantityEvent = (e) => {
  //   props.handleCartQuantity(e)
    
  // }
  
  

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
              <div className='close-container'>
                <input className='item-quantity' value={items.quantity} onChange={() => console.log('test')}></input>
                <button className='close-button' onClick={() => props.removeItem(items.id)}>&times;</button>
              </div>
            </div>
            <div className='total-container'>
              <p>Total</p>
              <p>${items.price.toFixed(2) * items.quantity}</p>
            </div>
            
          </div>
        )
      })}
      {cartValues.length > 0 && <div className='order-summary-container'>
        <h2 className='order-summary'>Order Summary</h2>
        <div className='subtotal-container'>
          <h3>Subtotal:</h3>
          <h3>{props.subtotal}</h3>
          <h3>Shipping:</h3>
          <h3>FREE</h3>
          <h3>Estimated Tax:</h3>
          <h3>.07 * total</h3>
          <h3>Estimated Total:</h3>
          <h3>TOTAL</h3>
          <button className='checkout-button'>CHECKOUT</button>
        </div>
      </div>}
      {cartValues.length === 0 && <h2 className='order-summary'>Your Cart is Empty.</h2>}
    </div>
  )
}
