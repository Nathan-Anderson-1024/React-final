import NavBar from '../NavBar/NavBar';
import ProductPage from '../ProductPage/ProductPage';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

function App() {
  const [products, setProducts] = useState([])

  const getData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const json = await response.json()
    return json
  }


  useEffect(() => {
    getData().then(
      result => setProducts(result)
    )
  }, [])



  return (
    <div className='header'>
      <NavBar />
      <div className='App'>
        <Routes>
          <Route path='/' element={<ProductPage products={products} /> } />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
      
  )
}

export default App;
