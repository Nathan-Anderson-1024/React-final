import React from 'react'
import Product from '../Product/Product'

export default function ProductList(props) {
  return (
    <div className='product-container'>
        {props.products.map((product) => {
          return <Product key={product.id} product={product}  />
      })}
    </div>
    
    // <Product products={props.products} />
  )
}
