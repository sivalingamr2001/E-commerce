import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import categories from "../../constants/products";
import "./ProductDetail.css";
import { useWishlist } from "../../context/WishlistContext";
import Loading from "../../utils/Loading/Loading";
import { Star } from "lucide-react";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
   const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  // Fetch product details using the productId from the URL
  useEffect(() => {
    const selectedProduct = categories.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  const isWishlisted = (productId) =>
    wishlist.some((item) => item.id === productId);

  return (
    <div>
      <div className="product-detail">
        <div className="product-detail__content">
          <div className="like-btn">
            <div className="heart-container" title="Like">
              <div>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={isWishlisted(product.id)}
                  onChange={() =>
                    isWishlisted(product.id)
                      ? removeFromWishlist(product.id)
                      : addToWishlist(product)
                  }
                  id={`wishlist-${product.id}`}
                />
                <div className="svg-container">
                  <svg
                    viewBox="0 0 24 24"
                    className="svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    className="svg-filled"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                  </svg>
                  <svg
                    className="svg-celebrate"
                    width="100"
                    height="100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="10,10 20,20"></polygon>
                    <polygon points="10,50 20,50"></polygon>
                    <polygon points="20,80 30,70"></polygon>
                    <polygon points="90,10 80,20"></polygon>
                    <polygon points="90,50 80,50"></polygon>
                    <polygon points="80,80 70,70"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="product-detail__bottom">
            <div className="product-detail__image-container">
              <img
                src={product.image}
                alt={product.title}
                className="product-detail__image"
              />
            </div>

            <div className="product-detail__info">
              <div className="product-detail__header">
                <h1 className="product-detail__title">{product.title}</h1>
              </div>
              <p className="product-detail__price">${product.price}</p>
              <p className="product-detail__description">
                {product.description}
              </p>
              <p className="product-detail__category">
                Category: <span>{product.category}</span>
              </p>
              <p className="product-detail__subcategory">
                Subcategory: <span>{product.subcategory}</span>
              </p>
              <p className="product-detail__subcategory">
                <Star />
                <span>
                   {product.rating.rate} ({product.rating.count})
                </span>
              </p>

              <div className="products__actions">
                <button
                  onClick={() => {
                    addToCart(product);
                  }}
                  className="CartBtn"
                >
                  <span className="IconContainer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                      fill="rgb(17, 17, 17)"
                      className="cart"
                    >
                      <path d="m0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                    </svg>
                  </span>
                  <div>
                    <p className="text">Add to Cart</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
