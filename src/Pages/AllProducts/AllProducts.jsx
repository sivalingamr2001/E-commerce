import React, { useState, useEffect } from "react";
import categories from "../../constants/products";
import "./AllProducts.css";
import Loading from "../../utils/Loading/Loading";
import { useWishlist } from "../../context/WishlistContext";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [productCount, setProductCount] = useState(categories.length);
  const [loading, setLoading] = useState(true);
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    // Simulating async data loading like from an API
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await new Promise((resolve) => {
          setTimeout(() => resolve(categories), 1000); // Simulate async loading with a timeout
        });

        setFilteredProducts(data);
        setProductCount(data.length);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    let filtered = categories;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedSubcategory !== "All") {
      filtered = filtered.filter(
        (product) => product.subcategory === selectedSubcategory
      );
    }

    setFilteredProducts(filtered);
    setProductCount(filtered.length);
  }, [selectedCategory, selectedSubcategory]);

  const categoriesList = [
    "All",
    ...new Set(categories.map((product) => product.category)),
  ];

  const subcategoriesList = [
    "All",
    ...new Set(
      categories
        .filter(
          (product) =>
            product.category === selectedCategory || selectedCategory === "All"
        )
        .map((product) => product.subcategory)
    ),
  ];

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSelectedSubcategory("All");
  };

  if (loading) {
    return <Loading />;
  }

  const showResetButton =
    selectedCategory !== "All" || selectedSubcategory !== "All";

  const isWishlisted = (productId) =>
    wishlist.some((item) => item.id === productId);

  return (
    <div className="allproducts">
      <div>
        <h1 className="allproducts__title">All Products</h1>
      </div>

      <div className="allproducts__filters">
        <select
          className="allproducts__category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          >
          {categoriesList.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {selectedCategory !== "All" && (
          <select
          className="allproducts__subcategory-select"
          value={selectedSubcategory}
          onChange={(e) => setSelectedSubcategory(e.target.value)}
          >
            {subcategoriesList.map((subcategory) => (
              <option key={subcategory} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </select>
        )}

        {showResetButton && (
          <button
          className="allproducts__reset-filters"
          onClick={handleResetFilters}
          >
            Reset Filters
          </button>
        )}
        {loading ? <p>Loading...</p> : <p>Showing {productCount} products</p>}
      </div>

      <div className="allproducts__grid">
        {filteredProducts.map((product) => (
          <div className="allproducts__card" key={product.id}>
            <div className="products__wishlist">
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
              <div className="products__discount">
                <p className="products__discount-tag">-50%</p>
              </div>
            </div>
            <div className="allproducts__image-container">
              <div className="allproducts__image-wrapper">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="allproducts__image"
                  />
                </Link>
              </div>
            </div>
            <div className="allproducts__name">{product.title}</div>
            <div className="allproducts__divider"></div>
            <div className="allproducts__footer">
              <span className="allproducts__price">${product.price}</span>
              <div className="products__actions">
                <Link to={`/product/${product.id}`}>
                  <div className="products__add-to-cart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="products__add-to-cart-icon"
                    >
                      <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                      <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                      <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                      <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
