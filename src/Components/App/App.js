import NavBar from '../NavBar/NavBar';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Cart from '../Cart/Cart';
import ProductDetail from '../ProductDetail/ProductDetail';
import ProductList from '../ProductList/ProductList';
import { CartProvider } from '../../Context/CartContext';
import { useCart } from '../../Context/CartContext';
//export const cartContext = React.createContext()

function App() {
  //import setQuantity function from context
  const {setQuantity} = useCart();
  
  

  
  //handles quantity changes in ProductDetails.js
  const handleUserQuantity = (event) => {
    if (Number(event.target.value < 1) || event.target.value.includes('-')) {
      setQuantity(1)
    } 
    else if (Number(event.target.value > 100)) {
      alert('You cannot purchase more than 100 of each item.')
      setQuantity(100)
    }
    
    else {
      setQuantity(Number(event.target.value))
    }
    
  }
  


  return (
    <div className='header'>
      <NavBar />
      <div className='App'>
      <CartProvider>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<ProductDetail handleUserQuantity={handleUserQuantity} />} />
        </Routes>
      </CartProvider>
      </div>
    </div>
      
  )
}

export default App;
