import React, {useMemo, useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Product from '../../Components/Product/Product';
import { useCart } from '../../Context/CartContext'

export default function SearchPage() {
  const { search } = useLocation();
  const { products } = useCart();
  const [searchResults, setSearchResults] = useState();

  const queryParams = useMemo(() => { 
    return new URLSearchParams(search);
  }, [search]);

  useEffect(() => {
    function getProductData() {
        const productNameToFind = queryParams.get('name');
        const productData =  products;
        const searchPattern = new RegExp(productData.map(product => `(?=.*${productNameToFind})`).join(''), 'i');
        const getResults = productData.filter(product => product.title.match(searchPattern))
        setSearchResults(getResults)
        
    }
    getProductData();
  }, [queryParams, products])





  return (
    <div>
        <h1>{`Results for "${queryParams.get('name')}"`}</h1>
        <h3>Products that matched your search:</h3>
        <div>
            { searchResults && searchResults.map((product) => {
                return (
                  <Product key={product.id} product={product}  />
                )
            })}
        </div>
    </div>
  )
}
