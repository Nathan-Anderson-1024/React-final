import React from 'react'
import './Cart.css'
import { useContext, useState, useEffect} from 'react';
import { cartContext } from '../App/App';

export default function Cart(props) {
  const product = props.product;
  
  //total for the whole order
  const [subtotal, setSubtotal] = useState({subtotal: 0, tax: 0, estimatedTotal: 0})
  //get cart data
  const cartValues = useContext(cartContext);
  
  useEffect(() => {
    subtotals();
  }, [cartValues])
  //removes item from cart
  const removeItem = (itemId) => {
    const newTotal = [...cartValues];
    const removedItem = newTotal.filter((item) => item.id !== itemId)
    props.setCart(removedItem)
  }
  

  //onChange can only take one argument ie (event) => handleQuantityChange(event)
  //need to get the item id I want to update quantity for
  //need to take the event value and pass it in and update quantity
  const compareItemId = (itemId, event) => {
    const newCart = [...cartValues];
    const newState = newCart.map(item => {
      if (item.id === itemId) {
        return {...item, quantity: event.target.value}
      }
      return item;
    })
    props.setCart(newState)

  }











  //calculate subtotal, estimated tax, and estimated total
  const subtotals = () => {
    if (cartValues.length === 0) return;
    const newCart = [...cartValues];
    const eachSubtotal = [];
    for (let item of newCart) {
      eachSubtotal.push(item.totalCost)
    }
    const newSubtotal = eachSubtotal.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    const tax = newSubtotal * .07;
    const estimatedTotal = newSubtotal + tax;
    setSubtotal({subtotal: newSubtotal.toFixed(2), tax: tax.toFixed(2), estimatedTotal: estimatedTotal.toFixed(2)});
  }
  
  

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
              <p>${items.price.toFixed(2) * items.quantity}</p>
            </div>
            
          </div>
        )
      })}
      {cartValues.length > 0 && <div className='order-summary-container'>
        <h2 className='order-summary'>Order Summary</h2>
        <div className='subtotal-container'>
          <h3>Subtotal:</h3>
          <h3>${subtotal.subtotal}</h3>
          <h3>Shipping:</h3>
          <h3>FREE</h3>
          <h3>Estimated Tax:</h3>
          <h3>${subtotal.tax}</h3>
          <h3>Estimated Total:</h3>
          <h3>${subtotal.estimatedTotal}</h3>
          <button className='checkout-button'>CHECKOUT</button>
        </div>
      </div>}
      {cartValues.length === 0 && <h2 className='order-summary'>Your Cart is Empty.</h2>}
    </div>
  )
}
