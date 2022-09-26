import React from 'react'
import Product from '../Product/Product'
export default function ProductList(props) {
  return (
    // <Routes>
    //     <Route path='/product/:id' render={({match}) => (
    //       <Product key={props.product.id} product={props.product.find((product) => product.id === match.params.id)}  />
    //     )}>

    //     </Route>
    //   </Routes>
    <div className='product-container'>
        {props.products.map((product) => {
          return <Product key={product.id} product={product}  />
      })}
    </div>
    
  )
}
