import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OrderHistoryPage.css";

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from localStorage
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  console.log(orders);

  return (
    <div className="order-history-page">
      <h1 className="order-history-page__title">Order History</h1>
      {orders.length === 0 ? (
        <p className="order-history-page__empty-message">
          You have no orders in your history.
        </p>
      ) : (
        <div className="order-history-page__content">
          {orders.map((order) => (
            <div key={order.id} className="order-history-page__order">
              <h2 className="order-history-page__order-id">
                Order ID: {order.id}
              </h2>
              <p>
                <strong>Date:</strong> {new Date(order.date).toLocaleString()}
              </p>
              <p>
                <strong>Total:</strong> ${order.total}
              </p>
              <p>
                <strong>Status:</strong> {order.status}
              </p>
              <Link
                to={`/orderdetails/${order.id}`}
                className="order-history-page__view-details"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
