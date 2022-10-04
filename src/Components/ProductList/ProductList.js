import Product from '../Product/Product'
import { useCart } from '../../Context/CartContext';

export default function ProductList() {
  const {products} = useCart();
  return (
    <div className='product-container'>
      {products.map((product) => {
        return <Product key={product.id} product={product}  />
      })}
    </div>
    
  )
}
