import React from "react";
import "./Success.css";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="success">
      <div className="success__card">
        <button className="success__dismiss" type="button">
          <X />
        </button>
        <div className="success__header">
          <div className="success__image">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M20 7L9.00004 18L3.99994 13"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </div>
          <div className="success__content">
            <span className="success__title">Order validated</span>
            <p className="success__message">
              Thank you for your purchase. Your package will be delivered within
              2 days of your purchase.
            </p>
          </div>
          <div className="success__actions">
            <Link to="/orderhistory">
              <button className="success__history" type="button">
                History
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
