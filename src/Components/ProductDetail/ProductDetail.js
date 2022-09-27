import { useParams } from "react-router";
import {useContext} from 'react'
import { cartContext } from "../App/App";
import './ProductDetail.css'



//each individual product
export default function ProductDetail(props) {
  //pulls id and gets index position of shop element
  const { id } = useParams();
  const indexLocation = id - 1;
  const product = props.product;
  const cartValues = useContext(cartContext);

  const handleUserQuantityEvent = (e) => {
    props.handleUserQuantity(e)
    
  }

  const setLocalStorage = () => {
    const updatedValue = {item: product[indexLocation].title,
                          quantity: props.quantity,
                          img: product[indexLocation].image,
                          price:product[indexLocation].price}
    props.setCart((prevState) => {
      return [...prevState, updatedValue]
    })
    localStorage.setItem(`cart`, JSON.stringify(cartValues))
  }

  return (
    <>
      <div className="individual-product-container">
        <div className="img-left">
          <img alt="product description" src={product[indexLocation].image}></img>
        </div>
        <div className="product-info-right">
          <h2 className="category">{product[indexLocation].category}</h2>
          <h1 className="title">{product[indexLocation].title}</h1>
          <h3 className="price">${product[indexLocation].price.toFixed(2)}</h3>
          <div className="quantity">
            <h3 className="quantity-title">Quantity:</h3>
            <input className="quantity-input" value={props.quantity} onChange={handleUserQuantityEvent}></input>
            <div className="buttons">
              <button onClick={props.addQuantity}>+</button>
              <button onClick={props.removeQuantity}>-</button>
            </div>
            <button className="add-cart" onClick={setLocalStorage}>Add to Cart</button>
          </div>
          <h3 className="description-title">Description:</h3>
          <h4 className="description">{product[indexLocation].description}</h4>
        </div>
      </div>
    </>
  );
}
