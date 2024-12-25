import React, { useEffect } from "react";
import Shopping from "../../assets/images/shopping.png";
import { brand } from "../../constants";
import Loader from "../../utils/Loader/Loader";
import { Link } from "react-router-dom";
import { HeaderAnimations } from "../../utils/Gsap/HeaderAnimations";
import { gsap } from "gsap";
import "./Header.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ShopButton Component */
const ShopButton = ({ link }) => (
  <Link to={link} className="shop-btn">
    <span className="shop-btn__text">Shop Now</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="10"
      viewBox="0 0 46 16"
    >
      <path
        d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
        transform="translate(30)"
      ></path>
    </svg>
  </Link>
);

/* Brands Component */
const Brands = ({ brandList }) => {
  useEffect(() => {
    if (brandList?.length > 0) {
      gsap.fromTo(
        ".header__brand-image",
        { opacity: 0, y: 500 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".header__brands",
            start: "top 85%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }
  }, [brandList]);

  return (
    <div className="header__brands">
      <h1 className="header__brands-title">Top Brands</h1>
      <div className="header__brands-images">
        {brandList?.length > 0 ? (
          brandList.map((brand, index) => (
            <img
              key={index}
              src={brand}
              alt={`Brand ${index + 1}`}
              className="header__brand-image"
            />
          ))
        ) : (
          <p>No brands available</p>
        )}
      </div>
    </div>
  );
};

/* Main Header Component */
const Header = () => {
  useEffect(() => {
    HeaderAnimations();
  }, []);

  return (
    <header className="header">
      <div className="header__content">
        <p className="header__intro">Welcome to</p>
        <div className="header__branding">
          <h1 className="header__title">Products Heaven</h1>
          <p className="header__description">
            Explore the best products from a variety of categories at unbeatable
            prices!
          </p>
        </div>
        <div className="header__shopping">
          <div className="shopping-left">
            <h2 className="header__tagline">Shop the Best Deals</h2>
            <p className="header__discount">
              Up to <span>50%</span> off on top brands
            </p>
            <div className="header__cta">
              <ShopButton link="/all-products" />
            </div>
            <Loader />
          </div>
          <img className="header__image" src={Shopping} alt="Shopping icon" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="header__bottom">
        <Brands brandList={Object.values(brand)} />
      </div>
    </header>
  );
};

export default Header;
