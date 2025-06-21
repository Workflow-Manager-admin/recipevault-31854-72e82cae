import React, { useState } from "react";
import SidebarFilter from "../components/SidebarFilter";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import RecipeDetailModal from "../components/RecipeDetailModal";
import "./HomePage.css";

// PUBLIC_INTERFACE
/**
 * HomePage: Main page to show sidebar, search, recipes, and detail modal.
 */
function HomePage({ recipes, categories }) {
  const [selectedCat, setSelectedCat] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filtered = recipes
    .filter(r =>
      (!selectedCat || r.category === selectedCat) &&
      (r.title.toLowerCase().includes(search.toLowerCase()) || r.shortDescription.toLowerCase().includes(search.toLowerCase()))
    );

  return (
    <div className="homepage-layout">
      <SidebarFilter categories={categories} selectedCategory={selectedCat} onSelectCategory={setSelectedCat} />
      <div className="homepage-main">
        <SearchBar value={search} onChange={setSearch} />
        <RecipeList recipes={filtered} onSelectRecipe={setSelectedRecipe} />
      </div>
      <RecipeDetailModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </div>
  );
}

export default HomePage;
