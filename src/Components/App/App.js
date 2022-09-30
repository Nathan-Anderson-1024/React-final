import NavBar from '../NavBar/NavBar';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Cart from '../Cart/Cart';
import ProductDetail from '../ProductDetail/ProductDetail';
import ProductList from '../ProductList/ProductList';
import { CartProvider } from '../../Context/CartContext';


function App() {
  //import setQuantity function from context
  return (
    <div className='header'>
      <NavBar />
      <div className='App'>
      <CartProvider>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<ProductDetail />} />
        </Routes>
      </CartProvider>
      </div>
    </div>
      
  )
}

export default App;
