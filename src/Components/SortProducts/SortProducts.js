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
    //adding setProducts or products to the dependency array causes infinite loop
    // eslint-disable-next-line
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
  const checkFilter = (event) => {
    
    if (event.target.value === 'default') {
      return setDefault();
    }
    else if (event.target.value === 'low-high') {
      return sortLowHigh();
    }
    else if (event.target.value === 'high-low') {
      return sortHighLow();
    } else {
      return;
    }
  }

  return (
    <form>
        <label htmlFor='sort-by'>Sort By: </label>
        <select id='sort-by' name='Default' onClick={(event) => checkFilter(event)}>
            <option value='default'>Default</option>
            <option value='low-high'>Price (Low to High)</option>
            <option value='high-low'>Price (High to Low)</option>
        </select>
    </form>
  )
}
