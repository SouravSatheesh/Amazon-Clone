import React from "react";
import Product from "../components/Product";
import "./Home.css";

function Home() {
  function randomImg() {
    const num = Math.floor(Math.random() * 2);
    if (num === 0)
      return "https://m.media-amazon.com/images/I/61ibO3cunjL._SX3000_.jpg";
    else return "https://m.media-amazon.com/images/I/71FzQCchyoL._SX3000_.jpg";
  }

  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={randomImg()} alt="" />
        <div className="home_row">
          <Product
            id="1"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation"
            image="https://theinnovationandstrategyblog.com/wp-content/uploads/2020/07/the-lean-startup-eric-ries.jpg"
            price={19.99}
            rating={4}
          />
          <Product
            id="2"
            title="Fossil Chronograph Black Men Watch CH2882"
            image="https://images-eu.ssl-images-amazon.com/images/I/41wuoLxtHrL.jpg"
            price={5445.00}
            rating={4}
          />
          <Product
            id="3"
            title="Adidas Men Running Shoes"
            image="https://m.media-amazon.com/images/I/81UenvHlrFL._AC_UL640_FMwebp_QL65_.jpg"
            price={2999.00}
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="4"
            title="Whirlpool 1.5 Ton 5 Star Inverter Split AC (Copper, 1.5T MAGICOOL PRO 5S COPR INVERTER, White)"
            image="https://images-eu.ssl-images-amazon.com/images/I/314z33cIqQL._AC_SX368_.jpg"
            price={32990.0}
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="5"
            title="American Tourister Ivy Polypropylene 68 cms Black Hardsided Check-in Luggage"
            image="https://m.media-amazon.com/images/I/71XovRvskDL._AC_UL640_FMwebp_QL65_.jpg"
            price={2099.0}
            rating={4}
          />
          <Product
            id="6"
            title="Redmi 9A (Nature Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery"
            image="https://images-eu.ssl-images-amazon.com/images/I/41jRzGyDUJL.jpg"
            price={6999.0}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
