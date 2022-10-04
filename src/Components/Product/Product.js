import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import { NumericFormat } from 'react-number-format'
import { useCart } from '../../Context/CartContext'

export default function Product({product}) {
  const { addCartItem } = useCart();




  return (
    <div className='item-link'>
      <Link to={`/products/${product.id}`} className='link'>
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
