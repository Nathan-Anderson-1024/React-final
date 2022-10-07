import React, {useEffect, useState} from 'react'
import { useCart } from '../../Context/CartContext';
import Product from '../../Components/Product/Product';

export default function Tech() {
    const { products } = useCart();
    const [searchResults, setSearchResults] = useState();

    useEffect(() => {
        function getProductData() {
            const productData =  products;
            const getResults = productData.filter(product => product.category === "electronics")
            setSearchResults(getResults)
            
        }
        getProductData();
      }, [products])
  return (
    <div>
<div className='search-products'>
            { searchResults && searchResults.map((product) => {
                return (
                  <Product key={product.id} product={product}  />
                )
            })}
        </div>
    </div>
  )
}
