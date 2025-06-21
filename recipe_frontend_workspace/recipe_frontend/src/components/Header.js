import React from "react";
import "./Header.css";

// PUBLIC_INTERFACE
/** 
 * Header/NavBar component for RecipeVault.
 * Displays site title, navigation links, and conditionally user menu.
 */
function Header({ onProfileClick }) {
  return (
    <header className="header-navbar">
      <div className="header-logo">
        <span className="logo-symbol">🍽️</span> RecipeVault
      </div>
      <nav className="header-nav">
        <a href="/" className="header-link">Home</a>
        <a href="/new" className="header-link">Create Recipe</a>
        <button className="header-link" onClick={onProfileClick}>Profile</button>
      </nav>
    </header>
  );
}

export default Header;
