import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import { NumericFormat } from 'react-number-format'
import { useCart } from '../../Context/CartContext'

export default function Product({product}) {
  const { setCart, cart, quantity} = useCart();

  const addCartItem = (itemId) => {
    //checks to see if item in cart, if not add it
    const newCart = [...cart];
    const result = newCart.find((product) => product.id === itemId);
    if (result === undefined) {
      const updatedValue = {
        item: product.title,
        quantity: quantity,
        img: product.image,
        price: product.price,
        totalCost: product.price * quantity,
        id: product.id
      }
      setCart((prevState) => {
      return [...prevState, updatedValue]
      })
    }
    //if item already in cart add selected number to the already existing number 
    else {
      const newState = newCart.map(item => {
        if (item.id === itemId) {
          return {...item, quantity: item.quantity + quantity, totalCost: item.totalCost + quantity * item.price}
        }
        return item;
      })
      setCart(newState)
    }
    localStorage.setItem(`cart`, JSON.stringify(cart))
  }









  return (
    <div className='item-link'>
      <Link to={`/product/${product.id}`} className='link'>
        <div className='product-wrapper'>
          <img src={product.image} alt={product.description} className='product-img'></img>
          <h4 className='product-name'>{product.title}</h4>
          {/* <p className='product-price'>${props.product.price.toFixed(2)}</p> */}
          <NumericFormat className='product-price' value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} />
        </div>
      </Link>
      <button className='add-button' onClick={() => addCartItem(product.id)}>Add to Cart</button>
    </div>
    
  )
    
  
}
