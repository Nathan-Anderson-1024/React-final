import NavBar from '../NavBar/NavBar';
import ProductPage from '../ProductPage/ProductPage';
import './App.css';

function App() {
  return (
    <div className='header'>
      <NavBar />
      <div className='App'>
        <ProductPage />  
      </div>
    </div>
      
  )
}

export default App;
