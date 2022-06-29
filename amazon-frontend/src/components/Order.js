import React from "react";
import "./Order.css";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../others/reducer";
import CheckoutProduct from "./CheckoutProduct";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          quantity={item.quantity}
		  hideButton={true}
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order_amount">Order Total: {value}</h3>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(order.data.basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"₹"}
      />
    </div>
  );
}

export default Order;
