import React from "react";
import "./CartPage.css";
import { Minus, Plus, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const CartPage = ({ cart, clearCart, removeFromCart, updateQuantity }) => {
  const navigate = useNavigate();
  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) return; // Prevent setting quantity below 1
    updateQuantity(productId, quantity); // Ensure updateQuantity properly updates the cart
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems: cart } });
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-container">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>No items in your cart.</p>
            <Link to="/" className="shop-link">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-page__items">
              {cart.map((item) => (
                <div key={item.id} className="cart-page__item">
                  <div className="cart-page__item-left">
                    <img
                      src={item.image || "/default-image.jpg"} // Fallback image
                      alt={item.name}
                      className="cart-page__item-image"
                    />
                    <div className="cart-page__item-details">
                      <h6 className="cart-page__item-title">{item.title}</h6>
                      <p className="cart-page__item-price">${item.price}</p>
                    </div>
                  </div>

                  <div className="cart-page__item-right">
                    <div className="cart-page__quantity">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className="cart-page__quantity-button"
                      >
                        <Minus className="q-minus" />
                      </button>
                      <span className="cart-page__quantity-value">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="cart-page__quantity-button"
                      >
                        <Plus className="q-plus" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="cart-page__remove-button"
                    >
                      <X />
                    </button>
                  </div>
                </div>
              ))}
              <hr />
              <div className="cart-page__footer">
                <button onClick={clearCart} className="cart-page__clear-button">
                  Clear Cart
                </button>
              </div>
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${calculateTotal()}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${calculateTotal()}</span>
              </div>
              <div className="cart-page__clear-button">
                {/* Pass the cart items to CheckoutPage */}
                <button onClick={handleCheckout} className="cart__check-btn">Proceed to Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
