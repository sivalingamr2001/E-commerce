import React from "react";
import { X, ShoppingCart } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
import "./Wishlist.css";

export default function Wishlist({ addToCart }) {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();

  return (
    <div className="wishlist-container">
      <h1 className="wishlist-title">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="empty-wishlist">Your wishlist is empty.</p>
      ) : (
        <ul className="wishlist-items">
          {wishlist.map((item) => (
            <li key={item.id} className="wishlist-item">
              <div className="item-image-container">
                <img src={item.image} alt={item.title} className="item-image" />
                <button
                  className="remove-item"
                  onClick={() => removeFromWishlist(item.id)}
                  aria-label="Remove item"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="item-details">
                <h2 className="item-name">{item.title}</h2>
                <p className="item-price">${item.price.toFixed(2)}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(item)}
                >
                  <ShoppingCart size={20} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <div className="products__buy">
        <button onClick={clearWishlist} className="products__buy-link">
          Clear Cart
        </button>
      </div>
    </div>
  );
}
