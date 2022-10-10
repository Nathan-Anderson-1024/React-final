import { useEffect } from 'react';
import { useCart } from '../../Context/CartContext';

export default function SortProducts({products}) {
  const { setProducts } = useCart();
  useEffect(() => {
    const newProducts = products;
    const sorted = [...newProducts].sort((a, b) => {
      return a.id - b.id;
    })
    setProducts(sorted);

  }, [])

  const sortLowHigh = () => {
    const newProducts = products
    const sorted = [...newProducts].sort((a, b) => {
        return a.price - b.price
    });
    setProducts(sorted)
  }

  const sortHighLow = () => {
    const newProducts = products;
    const sorted = [...newProducts].sort((a, b) => {
        return b.price - a.price
    });
    setProducts(sorted)
  }
  const setDefault = () => {
    const newProducts = products;
    const sorted = [...newProducts].sort((a, b) => {
      return a.id - b.id
  });
    setProducts(sorted)
  }

  return (
    <form>
        <label htmlFor='sort-by'>Sort By: </label>
        <select id='sort-by' name='Default'>
            <option value='default' onClick={setDefault}>Default</option>
            <option value='low-high' onClick={sortLowHigh}>Price (Low to High)</option>
            <option value='high-low' onClick={sortHighLow}>Price (High to Low)</option>
        </select>
    </form>
  )
}
