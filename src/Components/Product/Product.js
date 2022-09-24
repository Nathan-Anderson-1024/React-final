import React from 'react'

export default function Product(props) {
//   const product = props.products.map((product) => {
//     return <p key={product.id}>{product.title}</p>
//   })
  const numbers = props.products;
  return (
    <div className='product-container'>
        
        {numbers.map((product) => {
            return (
                <img key={product.id} src={product.image} alt={product.description} className='product-img'></img>
            )
        })}
        
    </div>
    
  )
    
  
}
