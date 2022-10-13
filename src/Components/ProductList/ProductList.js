import Product from "../Product/Product";
import { useCart } from "../../Context/CartContext";
import SortProducts from "../SortProducts/SortProducts";

export default function ProductList() {
  const { products } = useCart();
  return (
    <>
      {products.length > 0 && (
        <>
          <div className="filter-container">
            <SortProducts products={products} />
          </div>
          <div className="product-container">
            {products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </>
      )}
      {products.length === 0 && (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </>
  );
}
