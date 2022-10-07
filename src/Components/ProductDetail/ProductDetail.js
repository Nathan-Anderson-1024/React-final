import { useParams } from "react-router-dom";
import './ProductDetail.css'
import { useCart } from "../../Context/CartContext";


//each individual product
export default function ProductDetail() {
  //pulls id and gets index position of shop element
  const { id } = useParams();
  //const location = useLocation();
  //const { product } = location.state
  //const indexLocation = Number(id) - 1;
  //console.log(id)
  //console.log(product)
  
  
  
  const { addQuantity, removeQuantity, quantity, products, addCartItem, handleUserQuantity } = useCart();

  const findProduct = products.find(item => item.id === parseInt(id))
  //const findProduct = product
  //console.log(findProduct)
  console.log(products)
  

  
  return (
    <>
      <div className="individual-product-container">
        <div className="img-left">
          <img alt="product description" src={findProduct.image}></img>
        </div>
        <div className="product-info-right">
          <h2 className="category">{findProduct.category}</h2>
          <h1 className="title">{findProduct.title}</h1>
          <h3 className="price">${findProduct.price.toFixed(2)}</h3>
          <div className="quantity">
            <h3 className="quantity-title">Quantity:</h3>
            <input className="quantity-input" value={quantity} onChange={(event) => handleUserQuantity(event)}></input>
            <div className="buttons">
              <button onClick={() => addQuantity()}>+</button>
              <button onClick={() => removeQuantity()}>-</button>
            </div>
            <button className="add-cart" onClick={() => addCartItem(findProduct.id)}>Add to Cart</button>
          </div>
          <h3 className="description-title">Description:</h3>
          <h4 className="description">{findProduct.description}</h4>
        </div>
      </div>
    </>
  );
}
