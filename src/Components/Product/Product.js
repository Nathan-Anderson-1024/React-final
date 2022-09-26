import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'

export default function Product(props) {
  return (
    <>
      <Link to={`/product/${props.product.id}`} className='item-link'>
        <div className='product-wrapper'>
          <img src={props.product.image} alt={props.product.description} className='product-img'></img>
          <h4 className='product-name'>{props.product.title}</h4>
          <p className='product-price'>${props.product.price}</p>
        </div>
      </Link>
      
    </>
    
  )
    
  
}
