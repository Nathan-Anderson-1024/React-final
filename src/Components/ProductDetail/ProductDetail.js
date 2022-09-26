import React, {useState} from "react";
import { useParams } from "react-router";
import './ProductDetail.css'


//each individual product
export default function ProductDetail(props) {
  //pulls id and gets index position of shop element
  const { id } = useParams();
  const indexLocation = id - 1;
  const product = props.product;

  //set state of quantity
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity((previousQuantity) => previousQuantity + 1);
  }

  const removeQuantity = () => {
    const quantityValue = quantity;
    if (quantityValue <= 1) return;
    setQuantity((previousQuantity) => previousQuantity - 1);
  }

  const handleUserQuantity = (event) => {
    if (Number(event.target.value < 1) || event.target.value.includes('-')) {
      setQuantity(1)
    } else {
      setQuantity(Number(event.target.value))
    }
    
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
          <h3 className="price">${product[indexLocation].price}</h3>
          <div className="quantity">
            <h3 className="quantity-title">Quantity:</h3>
            <input className="quantity-input" value={quantity} onChange={handleUserQuantity}></input>
            <div className="buttons">
              <button onClick={addQuantity}>+</button>
              <button onClick={removeQuantity}>-</button>
            </div>
            <button className="add-cart">Add to Cart</button>
          </div>
          <h3 className="description-title">Description:</h3>
          <h4 className="description">{product[indexLocation].description}</h4>
        </div>
      </div>
    </>
  );
}
