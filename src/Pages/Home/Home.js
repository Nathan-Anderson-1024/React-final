import React from "react";
import { NavLink } from "react-router-dom";
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
        <Link to="/search?name=Men">
          <img src={mens} alt="man in jeans"></img>
          <div className="inner-text">
            Men
          </div>
        </Link>
      </div>
      <div className="home-img-div">
        <Link to="/search?name=Women">
          <img src={womens} alt="woman smiling"></img>
          <div className="inner-text">Women</div>
        </Link>
      </div>
      <div className="home-img-div">
        <Link to="/search?name=gold">
          <img src={bracelet} alt="a diamond bracelet"></img>
          <div className="inner-text bracelet">Accessories</div>
        </Link>
      </div>
      <div className="home-img-div">
        <Link to="/search?name=ssd">
          <img src={tech} alt="an iphone and apple watch"></img>
          <div className="inner-text">Tech</div>
        </Link>
      </div>
    </div>
  );
}
