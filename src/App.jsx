import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import SingleProducts from "./Pages/SingleProduct/SingleProducts";
import CartPage from "./Pages/CartPage/CartPage";
import Wishlist from "./Pages/Wishlist/Wishlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "./utils/useCart/useCart";
import { WishlistProvider } from "./context/WishlistContext";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import OrderHistoryPage from "./Pages/OrderHistoryPage/OrderHistoryPage";
import OrderDetailsPage from "./Pages/OrderDetailsPage/OrderDetailsPage";
import Success from "./Pages/Success/Success";
import NotFound from "./Pages/NotFound/NotFound";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import UserProfile from "./Pages/UserProfile/UserProfile";

function App() {
  const { cart, addToCart, removeFromCart, clearCart, updateQuantity } =
    useCart();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
  
      <>
        <WishlistProvider>
          <Navbar toggleSidebar={toggleSidebar} />
          <Sidebar
            sidebarVisible={sidebarVisible}
            toggleSidebar={toggleSidebar}
          />
          <Routes>
            <Route path="/E-commerce" element={<Home cart={cart} />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/orderhistory" element={<OrderHistoryPage />} />
            <Route
              path="/orderdetails/:orderId"
              element={<OrderDetailsPage />}
            />
            <Route path="/success" element={<Success />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />

            <Route
              path="/singleproduct/:id"
              element={<SingleProducts addToCart={addToCart} />}
            />
            <Route
              path="/wishlist"
              element={<Wishlist addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  cart={cart}
                  clearCart={clearCart}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              }
            />

            <Route
              path="/all-products"
              element={<AllProducts addToCart={addToCart} />}
            />
            <Route
              path="/product/:id"
              element={<ProductDetail addToCart={addToCart} />}
            />
          </Routes>
          <ToastContainer
            style={{
              top: "75px",
              right: "10px",
            }}
          />
        </WishlistProvider>
      </>
  );
}

export default App;
