import NavBar from '../NavBar/NavBar';
import ProductPage from '../ProductPage/ProductPage';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ProductDetail from '../ProductDetail/ProductDetail';

export const cartContext = React.createContext()

function App() {
  //sets state for products from api
  const [products, setProducts] = useState([]);
  //sets state for quantity of item selected
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  //adds 1 when clicking plus button
  const addQuantity = () => {
    setQuantity((previousQuantity) => previousQuantity + 1);
  }
  //removes 1 when clicking minus button
  const removeQuantity = () => {
    const quantityValue = quantity;
    if (quantityValue <= 1) return;
    setQuantity((previousQuantity) => previousQuantity - 1);
  }

  const handleUserQuantity = (event) => {
    if (Number(event.target.value < 1) || event.target.value.includes('-')) {
      setQuantity(1)
    } else {
      setQuantity(Number(event.target.value))
    }
    
  }

  const getData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const json = await response.json()
    return json
  }

  
  //gets data from api
  useEffect(() => {
    getData().then(
      result => {
        return setProducts(result)}
    )
  }, [])

  //removes item from cart
  const removeItem = (itemId) => {
    const newTotal = [...cart];
    const removedItem = newTotal.filter((item) => item.id !== itemId)
    setCart(removedItem)
  }
  



  return (
    <div className='header'>
      <NavBar />
      <div className='App'>
      <cartContext.Provider value={cart} >
        <Routes>
          <Route path='/' element={<ProductPage products={products} /> } />
          <Route path='/cart' element={<Cart removeItem={removeItem} />} />
          <Route path='/product/:id' element={<ProductDetail product={products} quantity={quantity} setCart={setCart}
            addQuantity={addQuantity} removeQuantity={removeQuantity} handleUserQuantity={handleUserQuantity} setQuantity={setQuantity} />} />
        </Routes>
      </cartContext.Provider>
      </div>
    </div>
      
  )
}

export default App;
