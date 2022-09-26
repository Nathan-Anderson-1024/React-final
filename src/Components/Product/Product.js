import React from 'react'
import './Product.css'


export default function Product(props) {
  return (
    <>
      
      <div className='product-wrapper'>
        <img src={props.product.image} alt={props.product.description} className='product-img'></img>
        <h4 className='product-name'>{props.product.title}</h4>
        <p className='product-price'>${props.product.price}</p>
      </div>
    </>
    
  )
    
  
}
