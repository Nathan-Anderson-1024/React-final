import { useParams } from "react-router-dom";
import './ProductDetail.css'
import { useCart } from "../../Context/CartContext";
import { useRef } from "react";

//each individual product
export default function ProductDetail() {
  //pulls id and gets index position of shop element
  const { id } = useParams();
  const quantityRef = useRef(1)
  const { addQuantity, removeQuantity, quantity, products, addCartItem, handleUserQuantity } = useCart();
  const findProduct = products.find(item => item.id === parseInt(id));
  
  return (
    <>
      {findProduct !== undefined && <div className="individual-product-container">
        <div className="img-left">
          <img alt="product description" src={findProduct.image}></img>
        </div>
        <div className="product-info-right">
          <h2 className="category">{findProduct.category}</h2>
          <h1 className="title">{findProduct.title}</h1>
          <h3 className="price">${findProduct.price.toFixed(2)}</h3>
          <div className="quantity">
            <h3 className="quantity-title">Quantity:</h3>
            <input className="quantity-input" ref={quantityRef} value={quantity} onChange={(event) => handleUserQuantity(event)}></input>
            <div className="buttons">
              <button className="increment" onClick={() => addQuantity()}>+</button>
              <button className="decrement" onClick={() => removeQuantity()}>-</button>
            </div>
            {Number(quantityRef.current.value) !== 0 && <button className="add-cart" onClick={() => addCartItem(findProduct.id)}>Add to Cart</button>}
          </div>
          <h3 className="description-title">Description:</h3>
          <h4 className="description">{findProduct.description}</h4>
        </div>
      </div> }
      {findProduct === undefined && <h1>Loading...</h1>}
    </>
  );
}
