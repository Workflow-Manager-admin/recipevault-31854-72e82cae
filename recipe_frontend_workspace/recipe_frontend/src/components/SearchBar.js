import React from "react";
import "./SearchBar.css";

// PUBLIC_INTERFACE
/**
 * SearchBar for searching recipe titles/descriptions.
 */
function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      className="search-bar"
      type="search"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder || "Search recipes..."}
      aria-label="Search Recipes"
    />
  );
}

export default SearchBar;
