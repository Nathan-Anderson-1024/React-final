import React from "react";
import "./Home.css";
import bracelet from "../../imgs/bracelet.jpg";
import mens from "../../imgs/mens.jpg";
import womens from "../../imgs/womens.jpg";
import tech from "../../imgs/tech.jpg";
import { Link } from "react-router-dom";
export default function Home() {


  return (
    <div className="home-container">
      <div className="home-img-div">
        <Link to={`/products/mens`}>
          <img src={mens} alt="man in jeans"></img>
          <div className="inner-text">Men's Clothing</div>
        </Link>
      </div>
      <div className="home-img-div">
        <Link to="/products/womens">
          <img src={womens} alt="woman smiling"></img>
          <div className="inner-text">Women's Clothing</div>
        </Link>
      </div>
      <div className="home-img-div">
        <Link to="/products/jewelery">
          <img src={bracelet} alt="a diamond bracelet"></img>
          <div className="inner-text bracelet">Jewelery</div>
        </Link>
      </div>
      <div className="home-img-div">
        <Link to="/products/electronics">
          <img src={tech} alt="an iphone and apple watch"></img>
          <div className="inner-text">Electronics</div>
        </Link>
      </div>
    </div>
  );
}
