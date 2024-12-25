import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  ChevronDown,
  Heart,
  History,
  LogIn,
  LogOut,
  Settings,
  UserRound,
} from "lucide-react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import categories from "../../constants/categories";
import "./Sidebar.css";

const Sidebar = ({ sidebarVisible, toggleSidebar }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <aside>
      <div className={`app__sidebar ${sidebarVisible ? "visible" : ""}`}>
        <div className="sidebar">
          <div className="app__sidebar-container">
            <div className="app__sidebar-toggle">
              <IoClose
                onClick={toggleSidebar}
                role="button"
                aria-label="Close sidebar"
              />
            </div>
            <div className="sidebar-title">
              <h1>Dashboard</h1>
            </div>
          </div>

          {/* ----- Login Section ----- */}
          <div className="login-section">
            <div className="sidebar__user-links">
              <h3>
                Hello, <span>John Doe!</span>
              </h3>
              <table className="user-links-table">
                <tbody>
                  <tr>
                    <td className="link-icon">
                      <LogIn />
                    </td>
                    <td className="link-text">
                      <Link
                        to="/login"
                        className="user-link"
                        onClick={toggleSidebar}
                      >
                        Login
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="link-icon">
                      <UserRound />
                    </td>
                    <td className="link-text">
                      <Link
                        to="/userprofile"
                        className="user-link"
                        onClick={toggleSidebar}
                      >
                        Account
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="link-icon">
                      <History />
                    </td>
                    <td className="link-text">
                      <a
                        href="/orderhistory"
                        className="user-link"
                        onClick={toggleSidebar}
                      >
                        Order History
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="link-icon">
                      <Heart />
                    </td>
                    <td className="link-text">
                      <Link
                        to="/wishlist"
                        className="user-link"
                        onClick={toggleSidebar}
                      >
                        Wishlist
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="link-icon">
                      <Settings />
                    </td>
                    <td className="link-text">
                      <a href="#" className="user-link" onClick={toggleSidebar}>
                        Settings
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="link-icon">
                      <LogOut />
                    </td>
                    <td className="link-text">
                      <a href="#" className="user-link" onClick={toggleSidebar}>
                        Logout
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr />

          {/* ----- Trend Section ----- */}
          <section>
            <div className="sidebar__quicklinks">
              <h3>Trending</h3>
              <ul>
                {[
                  "Top Deals",
                  "New Arrivals",
                  "Customer Support",
                  "Order Tracking",
                  "Gift Cards",
                ].map((link, index) => (
                  <li key={index}>
                    <Link to="/" onClick={toggleSidebar}>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <hr />
          {/* ----- Category Section ----- */}
          <section className="category-section">
            <h3>Categories</h3>
            <ul className="category-list">
              {categories.map((category, index) => (
                <li key={`${category.name}-${index}`} className="category-item">
                  <button
                    className="category-button"
                    onClick={() => toggleCategory(index)}
                  >
                    {category.name}
                    <ChevronDown
                      className={`chevrondown-icon ${
                        expandedCategory === index ? "chevrondown-rotate" : ""
                      }`}
                    />
                  </button>
                  {expandedCategory === index && (
                    <ul className="subcategory-list">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <li
                          key={`${subcategory}-${subIndex}`}
                          className="subcategory-item"
                        >
                          <a
                            href="/all-products"
                            className="subcategory-link"
                            onClick={toggleSidebar}
                          >
                            {subcategory}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  sidebarVisible: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
