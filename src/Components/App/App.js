import ProductPage from '../ProductPage/ProductPage';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className='App'>
        <ProductPage />
      </div>
    </Router>
    
  )
}

export default App;
