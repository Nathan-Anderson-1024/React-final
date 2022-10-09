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
import LowerNav from '../../Components/LowerNav/LowerNav';
import Men from '../Men/Men';
import Women from '../Women/Women';
import Accessories from '../Accessories/Accessories';
import Tech from '../Tech/Tech';


function App() {
  return (
    <div className='header'>
      <NavBar />
      <LowerNav />
      <div className='App'>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {/* <Route path='/products' element={<ProductList />} /> */}
          <Route path='/search' element={<SearchPage />} />
          <Route path='/products'>
            <Route index element={<ProductList />} />
            <Route exact path=':id' element={<ProductDetail />} />
            <Route path='mens' element={<Men />}></Route>
            <Route path='womens' element={<Women />}></Route>
            <Route path='jewelery' element={<Accessories />}></Route>
            <Route path='electronics' element={<Tech />}></Route>
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
