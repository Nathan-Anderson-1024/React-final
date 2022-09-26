import React, {useState, useEffect} from 'react'
import ProductList from '../ProductList/ProductList'

export default function ProductPage(props) {
  
  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //   .then(res=>res.json())
  //   .then(json=> {
  //       setProducts(json)
  //       console.log(products)
  //   })
  // }, [])
  

  return (
    <>
        <ProductList products={props.products} />
    </>
  )
}
