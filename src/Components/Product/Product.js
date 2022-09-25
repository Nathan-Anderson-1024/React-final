import React from 'react'
import './Product.css'
//import {BrowserRouter as Router} from 'react-router-dom'

export default function Product(props) {
//   const product = props.products.map((product) => {
//     return <p key={product.id}>{product.title}</p>
//   })
  const numbers = props.products;
  return (
    <div className='product-container'>
        
        {numbers.map((product) => {
            return (
                <div className='product-wrapper'>
                    <img key={product.id} src={product.image} alt={product.description} className='product-img'></img>
                    <h4 className='product-name'>{product.title}</h4>
                    <p className='product-price'>${product.price}</p>
                </div>
            )
        })}
    </div>
    
  )
    
  
}
