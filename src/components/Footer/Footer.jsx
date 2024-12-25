import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Importing social icons
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__left">
            <h3 className="footer__logo">Products Heaven</h3>
            <p className="footer__description">
              Explore the best products from a variety of categories at
              unbeatable prices.
            </p>
          </div>
          <div className="footer__right">
            <h4 className="footer__title">Quick Links</h4>
            <ul className="footer__links">
              <li>
                <Link to="/" className="footer__link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="footer__link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer__link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer__link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="footer-contact">
            <h4 className="footer__title">Contact Us</h4>
            <ul>
              <li>Email: support@productsheaven.com</li>
              <li>Phone: +1 (800) 123-4567</li>
              <li>Address: 123 E-Commerce St, Shopping City, SC 54321</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer-social">
            <h4 className="footer__title">Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <Facebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Twitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; 2024 Products Heaven. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
