import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./OrderDetailsPage.css";

export default function OrderDetailsPage() {
  const { orderId } = useParams(); // Extract the order ID from URL
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = () => {
      try {
        const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        const order = storedOrders.find((order) => order.id === orderId); // Find the order by ID
        if (!order) {
          throw new Error("Order not found");
        }
        setOrderDetails(order); // Set order details in state
      } catch (err) {
        setError(err.message);
      }
    };

    fetchOrderDetails();
  }, [orderId]); // Run the effect when orderId changes

  if (error) return <p className="order-detail-page__error-message">{error}</p>; // Handle errors
  if (!orderDetails)
    return <p className="order-detail-page__loading">Loading...</p>; // Handle loading state

  return (
    <div className="order-detail-page">
        <h1 className="order-detail-page__title">Order Details</h1>
      <div className="order-detail-page-container">

        {/* Order Info Section */}
        <div className="order-detail-page__info">
          <p className="order-detail-page__info-item">
            <strong>Order ID:</strong> {orderDetails.id}
          </p>
          <p className="order-detail-page__info-item">
            <strong>Date:</strong>{" "}
            {new Date(orderDetails.date).toLocaleString()}
          </p>
          <p className="order-detail-page__info-item">
            <strong>Total:</strong> ${orderDetails.total}
          </p>
          <p className="order-detail-page__info-item">
            <strong>Status:</strong> {orderDetails.status}
          </p>
          <p className="order-detail-page__info-item">
            <strong>Payment Method:</strong> {orderDetails.paymentMethod}
          </p>
        </div>

        {/* Shipping Info Section */}
        <div className="order-detail-page__shipping">
          <h2 className="order-detail-page__section-title">
            Shipping Information
          </h2>
          <p className="order-detail-page__shipping-item">
            <strong>Full Name:</strong> {orderDetails.shippingInfo.fullName}
          </p>
          <p className="order-detail-page__shipping-item">
            <strong>Address:</strong> {orderDetails.shippingInfo.address}
          </p>
          <p className="order-detail-page__shipping-item">
            <strong>City:</strong> {orderDetails.shippingInfo.city}
          </p>
          <p className="order-detail-page__shipping-item">
            <strong>Zip Code:</strong> {orderDetails.shippingInfo.zipCode}
          </p>
        </div>
      </div>

      {/* Items Section */}
      <div className="order-detail-page__items">
        <h2 className="order-detail-page__section-title">Items</h2>
        <ul className="order-detail-page__item-list">
          {orderDetails.items.map((item, index) => (
            <li key={index} className="order-detail-page__item">
              <img
                className="order-detail-page__item-image"
                src={item.image}
                alt={item.title}
              />
              <div>
                <p className="order-detail-page__item-name">
                  <strong>Item Name:</strong> {item.title}
                </p>
                <p className="order-detail-page__item-price">
                  <strong>Price:</strong> ${item.price}
                </p>
                <p className="order-detail-page__item-quantity">
                  <strong>Quantity:</strong> {item.quantity}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
