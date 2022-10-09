import React from 'react';
import { useCart } from '../../Context/CartContext';

export default function SortProducts() {

  const { products } = useCart();

  const sortLowHigh = () => {
    const newProducts = products
    newProducts.sort((a, b) => {
        return a.price - b.price
    })
    products.forEach((e) => {
        console.log(`${e.id} ${e.price}`)
    })
  }
  const sortHighLow = () => {
    const newProducts = products
    newProducts.sort((a, b) => {
        return b.price - a.price
    })
    products.forEach((e) => {
        console.log(`${e.id} ${e.price}`)
    })
  }
  return (
    <form>
        <label htmlFor='sort-by'>Sort By: </label>
        <select id='sort-by' name='Default'>
            <option value='default'>Default</option>
            <option value='low-high' onClick={sortLowHigh}>Low to High</option>
            <option value='high-low' onClick={sortHighLow}>High to Low</option>
        </select>
    </form>
  )
}
