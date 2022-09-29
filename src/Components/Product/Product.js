import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import { NumericFormat } from 'react-number-format'
export default function Product(props) {
  return (
    <div className='item-link'>
      <Link to={`/product/${props.product.id}`} className='link'>
        <div className='product-wrapper'>
          <img src={props.product.image} alt={props.product.description} className='product-img'></img>
          <h4 className='product-name'>{props.product.title}</h4>
          {/* <p className='product-price'>${props.product.price.toFixed(2)}</p> */}
          <NumericFormat className='product-price' value={props.product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} />
        </div>
      </Link>
      <button className='add-button'>Add to Cart</button>
        
      
      
    </div>
    
  )
    
  
}
