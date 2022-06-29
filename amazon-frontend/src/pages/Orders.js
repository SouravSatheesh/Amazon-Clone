import React, { useEffect, useState } from "react";
import "./Orders.css";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../others/firebase";
import { useStateValue } from '../others/StateProvider';
import Order from '../components/Order';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrdersList = async () => {
      //   const orderList = await getDoc(q);
      //   console.log("This is orders", orderList);

      if (user) {
        onSnapshot(
          query(collection(db, "users", user?.uid, "orders"), orderBy("created", "desc")),
          (querySnapshot) => {
            setOrders(
              querySnapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            );
          }
        );
      } else {
        setOrders([]);
      }
    };
    getOrdersList();
  }, [user]);

  return (
    <div className="orders">
      <div className="orders_order">
		  <h1>Your Orders</h1>
		  {orders?.map(order => (
			  <Order order={order} />
		  ))}
	  </div>
    </div>
  );
}

export default Orders;
