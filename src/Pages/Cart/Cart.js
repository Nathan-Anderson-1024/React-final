import React from 'react'
import './Cart.css'
import { useEffect } from 'react';
import { useCart } from '../../Context/CartContext';
import { NumericFormat } from 'react-number-format'
import { Link } from 'react-router-dom';

export default function Cart() {
  //get cart data
  const {removeItem, setCart, cart, calcSubtotals, subtotal} = useCart();
  
  useEffect(() => {
    calcSubtotals();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart])
  
  

  //onChange can only take one argument ie (event) => handleQuantityChange(event)
  //need to get the item id I want to update quantity for
  //need to take the event value and pass it in and update quantity
  const compareItemId = (itemId, event) => {
    const newCart = [...cart];
    const newState = newCart.map(item => {
      if (item.id === itemId) {
        return {...item, quantity: event.target.value, totalCost: event.target.value * item.price}
      }
      return item;
    })
    setCart(newState)

  }


  return (
    <div className='cart-container'>
      <h1 className='cart-header'>Your Shopping Cart</h1>
      {cart.map((items, i) => {
        return  (
          <div className='item-container' key={i}>
            <div className='cart-img-container'>
              <img src={items.img} alt='item in cart'></img>
            </div>
            <div><p className='item'>{items.item}</p></div>
            <div className='quantity-container'>
              <p>Quantity</p>
              <div className='close-container'>
                <select className='item-quantity' onChange={(event) => compareItemId(items.id, event)} value={items.quantity}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>
                <button className='close-button' onClick={() => removeItem(items.id)}>&times;</button>
              </div>
            </div>
            <div className='total-container'>
              <p>Total</p>
              <NumericFormat value={items.totalCost} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} />
            </div>
          </div>
        )
      })}
      {cart.length > 0 && <div className='order-summary-container'>
        <h2 className='order-summary'>Order Summary</h2>
        <div className='subtotal-container'>
          <h3>Subtotal:</h3>
          <h3>
            <NumericFormat value={subtotal.subtotal} displayType={'text'} 
            thousandSeparator={true} prefix={'$'} 
            decimalScale={2} fixedDecimalScale={true} />
          </h3>
          <h3>Shipping:</h3>
          <h3>FREE</h3>
          <h3>Estimated Tax:</h3>
          <h3>
            <NumericFormat value={subtotal.tax} displayType={'text'} 
            thousandSeparator={true} prefix={'$'} 
            decimalScale={2} fixedDecimalScale={true} />
          </h3>
          <h3>Estimated Total:</h3>
          <h3>
            <NumericFormat value={subtotal.estimatedTotal} displayType={'text'} 
            thousandSeparator={true} prefix={'$'} 
            decimalScale={2} fixedDecimalScale={true} />
          </h3>
          <Link to='/checkout' className='checkout-button-container'>
            <button className='checkout-button'>CHECKOUT</button>
          </Link>
        </div>
      </div>}
      {cart.length === 0 && <h2 className='order-summary'>Your Cart is Empty.</h2>}
    </div>
  )
}
