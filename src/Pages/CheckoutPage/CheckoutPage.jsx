import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CreditCard, Truck, ShoppingBag } from "lucide-react";
import "./CheckoutPage.css";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const cartItems = location.state?.cartItems || [];

  // Calculate total only once and reuse it
  const total = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const { fullName, address, city, zipCode } = formData;

    // General validation
    if (!fullName || !address || !city || !zipCode) {
      setErrorMessage("Please fill out all required fields.");
      return false;
    }

    // Credit card-specific validation
    if (paymentMethod === "credit-card") {
      const { cardNumber, expiryDate, cvv } = formData;
      if (!cardNumber || !expiryDate || !cvv) {
        setErrorMessage("Please complete your credit card details.");
        return false;
      }
    }

    setErrorMessage("");
    return true;
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Prepare the new order data
      const newOrder = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        total,
        status: "Processing",
        items: cartItems,
        paymentMethod,
        shippingInfo: {
          fullName: formData.fullName,
          address: formData.address,
          city: formData.city,
          zipCode: formData.zipCode,
        },
      };

      // Log order details to console
      console.log("New Order:", newOrder);

      // Save the new order to localStorage
      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
      localStorage.setItem(
        "orders",
        JSON.stringify([newOrder, ...existingOrders])
      );

      // Navigate to success page
      navigate("/success", {
        state: { cartItems, total },
      });
    }
  };

  return (
    <div className="checkout-page">
      <h1 className="checkout-page__title">Checkout</h1>
      <div className="checkout-page__content">
        <div className="checkout-page__form">
          <section className="checkout-page__section checkout-page__section--shipping">
            <h2 className="checkout-page__section-title">
              <Truck className="checkout-page__icon" /> Shipping Information
            </h2>
            <div className="checkout-page__form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="checkout-page__form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="123 Main St"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="checkout-page__form-row">
              <div className="checkout-page__form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="New York"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="checkout-page__form-group">
                <label htmlFor="zipCode">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  placeholder="10001"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          <section className="checkout-page__section checkout-page__section--payment">
            <h2 className="checkout-page__section-title">
              <CreditCard className="checkout-page__icon" /> Payment Method
            </h2>
            <div className="checkout-page__radio-group">
              <div className="checkout-page__radio-item">
                <input
                  type="radio"
                  value="credit-card"
                  id="credit-card"
                  checked={paymentMethod === "credit-card"}
                  onChange={() => setPaymentMethod("credit-card")}
                />
                <label htmlFor="credit-card">Credit Card</label>
              </div>
              <div className="checkout-page__radio-item">
                <input
                  type="radio"
                  value="Cash On Delivery"
                  id="cash-on-delivery"
                  checked={paymentMethod === "Cash On Delivery"}
                  onChange={() => setPaymentMethod("Cash On Delivery")}
                />
                <label htmlFor="cash-on-delivery">Cash On Delivery</label>
              </div>
            </div>
            {paymentMethod === "credit-card" && (
              <>
                <div className="checkout-page__form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="checkout-page__form-row">
                  <div className="checkout-page__form-group">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input
                      type="text"
                      id="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="checkout-page__form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </>
            )}
          </section>
        </div>

        <div className="checkout-page__order-summary">
          <h2 className="checkout-page__order-summary-title">
            <ShoppingBag className="checkout-page__icon" /> Order Summary
          </h2>
          <ul className="checkout-page__order-items">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <li key={item.id} className="checkout-page__order-item">
                  <span>
                    {item.title} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))
            ) : (
              <li>No items in your order</li>
            )}
            <hr className="checkout-page__products-divider" />
          </ul>
          <div className="checkout-page__summary-row checkout-page__summary-row--subtotal">
            <span>Subtotal</span>
            <span>${calculateTotal()}</span>
          </div>
          <div className="checkout-page__summary-row checkout-page__summary-row--shipping">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="checkout-page__summary-row checkout-page__summary-row--total">
            <span>Total</span>
            <span>${calculateTotal()}</span>
          </div>
          {errorMessage && (
            <div className="checkout-page__error">{errorMessage}</div>
          )}
          <button
            className="checkout-page__place-order-btn"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
