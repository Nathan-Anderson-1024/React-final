import React from 'react'

//each individual product
export default function ProductDetail() {
  return (
    <>
        <div className='individual-product-container'>
            <div className='img-left'>
                <img>IMAGE</img>
            </div>
            <div className='product-info-right'>
                <h4>CATEGORY</h4>
                <h1>TITLE</h1>
                <h2>PRICE</h2>
                <h3>QUANTITY, ADD TO CART</h3>
                <h4>Description</h4>
            </div>
        </div>
    </>
  )
}
