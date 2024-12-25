import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const productKeywords = [
  "Smartphones",
  "Laptops",
  "Tablets",
  "Accessories",
  "Men's Clothing",
  "Women's Clothing",
  "Kids Clothing",
  "Shoes",
  "Furniture",
  "Appliances",
  "Decor",
  "Kitchenware",
  "Fiction Books",
  "Non-fiction Books",
  "Educational Books",
  "Comics",
  "Fitness Equipment",
  "Camping Gear",
  "Team Sports Equipment",
  "Water Sports Equipment",
  "Skincare",
  "Makeup",
  "Hair Care",
  "Fragrances",
  "Board Games",
  "Puzzles",
  "Action Figures",
  "Educational Toys",
  "Car Accessories",
  "Tools",
  "Tires",
  "Car Electronics",
  "Pet Supplies",
  "Dog Accessories",
  "Cat Accessories",
  "Fish Supplies",
  "Vitamins",
  "First Aid Supplies",
  "Household Supplies",
  "Baby Care",
];

export const useNavbarHooks = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSearchSubmit = () => {
    if (searchQuery.trim() === "") return;

    // Check if the search query matches any product keyword
    const foundKeyword = productKeywords.find((keyword) =>
      keyword.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (foundKeyword) {
      // Redirect to all-products page with searchQuery as state
      navigate("/all-products", { state: { searchQuery } });
      setSearchResult(foundKeyword); // Optionally set a search result
    } else {
      // Show no results found message
      toast("No results found. Try searching our website.");
    }

    setSearchHistory((prev) => [searchQuery, ...prev].slice(0, 500));
    setSearchQuery("");
    setIsSearchOpen(false); // Close the search bar after submitting
  };

  const handleHistoryClick = (query) => setSearchQuery(query);

  const handleRemoveHistoryItem = (index) => {
    const updatedHistory = [...searchHistory];
    updatedHistory.splice(index, 1);
    setSearchHistory(updatedHistory);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
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
  };
};
