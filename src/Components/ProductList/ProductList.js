import React from 'react'
import Product from '../Product/Product'
import {Switch, Route} from 'react-router'
export default function ProductList(props) {
  return (
    // <Switch>
    //     <Route path='/product/:id' render={({match}) => (
    //       <Product key={props.product.id} product={props.product.find((product) => product.id === match.params.id)}  />
    //     )}>

    //     </Route>
    //   </Switch>
    <div className='product-container'>
        {props.products.map((product) => {
          return <Product key={product.id} product={product}  />
      })}
    </div>
    
    // <Product products={props.products} />
  )
}
