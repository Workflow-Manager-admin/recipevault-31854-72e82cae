import React from "react";
import "./SidebarFilter.css";

// PUBLIC_INTERFACE
/** 
 * SidebarFilter component for RecipeVault.
 * Provides filtering by category/tags/ingredients.
 */
function SidebarFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <aside className="sidebar-filter">
      <h3 className="sidebar-title">Filter</h3>
      <ul className="sidebar-list">
        <li
          className={`sidebar-item${selectedCategory === null ? " selected" : ""}`}
          onClick={() => onSelectCategory(null)}
        >
          All
        </li>
        {categories.map((cat) => (
          <li
            key={cat}
            className={`sidebar-item${selectedCategory === cat ? " selected" : ""}`}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SidebarFilter;
