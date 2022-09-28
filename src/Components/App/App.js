import NavBar from '../NavBar/NavBar';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ProductDetail from '../ProductDetail/ProductDetail';
import ProductList from '../ProductList/ProductList';

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
  //handles quantity changes in ProductDetails.js
  const handleUserQuantity = (event) => {
    if (Number(event.target.value < 1) || event.target.value.includes('-')) {
      setQuantity(1)
    } else {
      setQuantity(Number(event.target.value))
    }
    
  }
  //handle cart quantity
  // const handleCartQuantity = (event) => {
  //   if (Number(event.target.value < 1) || event.target.value.includes('-')) {
  //     setCart((previousCart) => [...previousCart, {...cart, quantity: 1}])
  //   } else {
  //     const updatedValue = {
  //       quantity: event.target.value
  //     }
  //     // setCart((previousCart) => {
  //     //   return [...previousCart, updatedValue]
  //     // })
  //     setCart((previousCart) => [...previousCart, {quantity: event.target.value}])
  //     console.log(cart)
  //   }
  // }
  //handles subtotal
  

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

  
  



  return (
    <div className='header'>
      <NavBar />
      <div className='App'>
      <cartContext.Provider value={cart} >
        <Routes>
          <Route path='/' element={<ProductList products={products} /> } />
          <Route path='/cart' element={<Cart setCart={setCart} />} />
          <Route path='/product/:id' element={<ProductDetail product={products} quantity={quantity} setCart={setCart}
            addQuantity={addQuantity} removeQuantity={removeQuantity} handleUserQuantity={handleUserQuantity} setQuantity={setQuantity} />} />
        </Routes>
      </cartContext.Provider>
      </div>
    </div>
      
  )
}

export default App;
