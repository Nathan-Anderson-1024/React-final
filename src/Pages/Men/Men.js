import React, { useEffect, useState } from "react";
import { useCart } from "../../Context/CartContext";
import Product from "../../Components/Product/Product";
import SortProducts from "../../Components/SortProducts/SortProducts";
export default function Men() {
  const { products } = useCart();
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    function getProductData() {
      const productData = products;
      const getResults = productData.filter(
        (product) => product.category === "men's clothing"
      );
      setSearchResults(getResults);
    }
    getProductData();
  }, [products]);
  return (
    <>
      {products.length > 0 && <div>
        <div className="filter-container">
          <SortProducts products={products} />
        </div>
        <div className="product-container">
          {searchResults &&
            searchResults.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
        </div>
      </div>}
      {products.length === 0 && <h1>Loading...</h1>}
    </>
  );
}
