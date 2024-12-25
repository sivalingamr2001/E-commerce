import React, { useState } from "react";
import { Info, Search, ShoppingBag } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useNavbarHooks } from "../../utils/hooks/useNavbarHooks";
import "./Navbar.css";
import Modal from "../ui/Modal";

const Navbar = ({ toggleSidebar }) => {
  const {
    isSearchOpen,
    searchQuery,
    searchHistory,
    searchResult,
    dropdownRef,
    toggleSearch,
    handleSearchChange,
    handleSearchSubmit,
    handleHistoryClick,
    handleRemoveHistoryItem,
  } = useNavbarHooks(); // Use the custom hooks

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__toggle">
          <CiMenuKebab onClick={toggleSidebar} />
        </div>
        <div className="navbar__logo">
          <h1>
            <Link to="/">Products Heaven</Link>
          </h1>
        </div>
        <div className="navbar__links">
          <div className="navbar__search" onClick={toggleSearch}>
            <Search />
          </div>
          <Link to="/cart" className="navbar__cart">
            <ShoppingBag />
          </Link>
          <div>
            <Info onClick={openModal} />
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <main>
                <section id="intro">
                  <h1>Project Overview</h1>
                  <p>
                    This project is a modern,{" "}
                    <strong>React-based e-commerce website</strong> designed for
                    a seamless shopping experience. It features a{" "}
                    <strong>user-friendly interface</strong> that allows
                    customers to browse a wide range of products, add them to
                    their cart, and manage their wishlist. The website is fully{" "}
                    <strong>responsive</strong>, ensuring optimal usability
                    across all devices.
                  </p>
                </section>

                <section id="key-functionalities">
                  <h2>Key Functionalities Include:</h2>
                  <ul>
                    <li>
                      <strong>Product Browsing and Cart Management:</strong>{" "}
                      Customers can explore products, add them to the shopping
                      cart, and adjust quantities.
                    </li>
                    <li>
                      <strong>Wishlist Feature:</strong> Users can save their
                      favorite products to revisit later.
                    </li>
                    <li>
                      <strong>Checkout and Order History:</strong> A streamlined
                      checkout process for customers, with the ability to view
                      past orders and their details.
                    </li>
                    <li>
                      <strong>Notifications:</strong> Real-time notifications
                      alert users to actions like successful product additions
                      to the cart.
                    </li>
                  </ul>
                </section>

                <section id="technologies">
                  <h2>Technologies Used:</h2>
                  <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>React Context</li>
                    <li>Responsive Design</li>
                    <li>Real-time Notifications</li>
                  </ul>
                </section>
              </main>
            </Modal>
          </div>
        </div>
      </div>
      {isSearchOpen && (
        <div className="navbar__search-container" ref={dropdownRef}>
          <div className="search__menu">
            <div className="navbar__input">
              <FaSearch />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyUp={(e) => e.key === "Enter" && handleSearchSubmit()}
              />
            </div>
            {searchResult && <p className="search__result">{searchResult}</p>}
            <div className="search__history">
              <h2>Recent Searches</h2>
              <ul>
                {searchHistory.length === 0 ? (
                  <li>No items in search history.</li>
                ) : (
                  searchHistory.map((historyItem, index) => (
                    <li
                      key={index}
                      className="history-item"
                      onClick={() => handleHistoryClick(historyItem)}
                    >
                      {historyItem}
                      <span
                        className="remove-item-icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveHistoryItem(index);
                        }}
                      >
                        ×
                      </span>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
