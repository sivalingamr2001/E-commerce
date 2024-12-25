import React, { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        toast.info(`${product.title} is already in your wishlist!`);
        return prev; // Avoid duplicates
      }
      toast.success(`${product.title} added to your wishlist!`);
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => {
      const product = prev.find((item) => item.id === id);
      if (product) {
        toast.warn(`${product.title} removed from your wishlist.`);
      }
      return prev.filter((item) => item.id !== id);
    });
  };

  const clearWishlist = () => {
    setWishlist([]);
    toast.error("Wishlist cleared!");
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
