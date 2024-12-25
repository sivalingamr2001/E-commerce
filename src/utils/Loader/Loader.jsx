import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <>
      <div className="rectangle">
        <div className="loader-card">
          <div className="loader-anime">
            <div className="words">
              <span className="word">Wide Product Range</span>
              <span className="word">Exclusive Deals and Discounts</span>
              <span className="word">Seamless User Experience</span>
              <span className="word">Easy Payment Options</span>
              <span className="word">Fast and Reliable Deliverys</span>
              <span className="word">Secure Shopping</span>
              <span className="word">Customer-Friendly Policies</span>
              <span className="word">Rewards and Loyalty Programs</span>
            </div>
          </div>
        </div>
        <div className="left-line"></div>
        <div className="right-line"></div>
      </div>
    </>
  );
};

export default Loader;
