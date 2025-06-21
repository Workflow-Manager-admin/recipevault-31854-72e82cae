import React from "react";
import "./RecipeListItem.css";

// PUBLIC_INTERFACE
/**
 * RecipeListItem displays brief recipe info.
 */
function RecipeListItem({ recipe, onClick }) {
  return (
    <li className="recipe-list-item" onClick={onClick}>
      <div className="recipe-list-title">{recipe.title}</div>
      <div className="recipe-list-meta">{recipe.shortDescription}</div>
    </li>
  );
}

export default RecipeListItem;
