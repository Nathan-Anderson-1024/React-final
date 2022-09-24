import React from 'react'
import Product from '../Product/Product'

export default function ProductList(props) {
  return (
    <Product products={props.products} />
  )
}
