import React from "react";
import CheckoutProduct from "../components/CheckoutProduct";
import "./Checkout.css";
import Subtotal from '../components/Subtotal';
import { useStateValue } from '../others/StateProvider';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://wp.disruptiveadvertising.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-768x164.png"
          alt=""
          className="checkout_ad"
        />
        <div>
          <h3 className="checkout_username">Hello {user ? user?.email.split('@')[0] : "Guest"}</h3>
          <h2 className="checkout_title">Your Shopping Cart {basket.length ? "" : "is empty"}</h2>
        </div>

        {basket.map( item => (
          <CheckoutProduct 
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            quantity={item.quantity}
          />
        ))}
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
