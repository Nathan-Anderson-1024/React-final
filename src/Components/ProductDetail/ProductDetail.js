import React from "react";
import { useParams } from "react-router";
import './ProductDetail.css'


//each individual product
export default function ProductDetail(props) {
  const { id } = useParams();
  const indexLocation = id - 1;
  const product = props.product;
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
            <input className="quantity-input" value={1}></input>
            <div className="buttons">
              <button>+</button>
              <button>-</button>
            </div>
          </div>
          <h3 className="description-title">Description:</h3>
          <h4 className="description">{product[indexLocation].description}</h4>
        </div>
      </div>
    </>
  );
}
