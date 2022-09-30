import { useParams } from "react-router";
import './ProductDetail.css'
import { useCart } from "../../Context/CartContext";


//each individual product
export default function ProductDetail(props) {
  //pulls id and gets index position of shop element
  const { id } = useParams();
  const indexLocation = id - 1;
  

  const { addQuantity, removeQuantity, quantity, products, addCartItem, handleUserQuantity } = useCart();
  

  
  return (
    <>
      <div className="individual-product-container">
        <div className="img-left">
          <img alt="product description" src={products[indexLocation].image}></img>
        </div>
        <div className="product-info-right">
          <h2 className="category">{products[indexLocation].category}</h2>
          <h1 className="title">{products[indexLocation].title}</h1>
          <h3 className="price">${products[indexLocation].price.toFixed(2)}</h3>
          <div className="quantity">
            <h3 className="quantity-title">Quantity:</h3>
            <input className="quantity-input" value={quantity} onChange={(event) => handleUserQuantity(event)}></input>
            <div className="buttons">
              <button onClick={() => addQuantity()}>+</button>
              <button onClick={() => removeQuantity()}>-</button>
            </div>
            <button className="add-cart" onClick={() => addCartItem(products[indexLocation].id)}>Add to Cart</button>
          </div>
          <h3 className="description-title">Description:</h3>
          <h4 className="description">{products[indexLocation].description}</h4>
        </div>
      </div>
    </>
  );
}
