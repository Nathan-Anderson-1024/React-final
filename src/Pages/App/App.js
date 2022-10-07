import NavBar from '../../Components/NavBar/NavBar';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Cart from '../Cart/Cart';
import ProductDetail from '../../Components/ProductDetail/ProductDetail';
import ProductList from '../../Components/ProductList/ProductList';
import { CartProvider } from '../../Context/CartContext';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import NotFound from '../NotFound/NotFound';
import Home from '../Home/Home';
import SearchPage from '../SearchPage/SearchPage';


function App() {
  return (
    <div className='header'>
      <NavBar />
      <div className='App'>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {/* <Route path='/products' element={<ProductList />} /> */}
          <Route path='/search' element={<SearchPage />} />
          <Route path='/products'>
            <Route index element={<ProductList />} />
            <Route path=':id' element={<ProductDetail />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          {/* <Route path='/products/:id' element={<ProductDetail />} /> */}
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CartProvider>
      </div>
    </div>
      
  )
}

export default App;
