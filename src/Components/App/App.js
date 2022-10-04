import NavBar from '../NavBar/NavBar';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Cart from '../Cart/Cart';
import ProductDetail from '../ProductDetail/ProductDetail';
import ProductList from '../ProductList/ProductList';
import { CartProvider } from '../../Context/CartContext';
import CheckoutPage from '../CheckoutPage/CheckoutPage';


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
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
      </CartProvider>
      </div>
    </div>
      
  )
}

export default App;
