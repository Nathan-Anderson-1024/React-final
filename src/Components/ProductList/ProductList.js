import Product from "../Product/Product";
import { useCart } from "../../Context/CartContext";
import SortProducts from "../SortProducts/SortProducts";

export default function ProductList() {
  const { products } = useCart();
  return (
    <>
      <div className="filter-container">
        <SortProducts />
      </div>
      <div className="product-container">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}
