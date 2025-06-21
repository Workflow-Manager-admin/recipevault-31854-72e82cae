import React from "react";
import RecipeListItem from "./RecipeListItem";
import "./RecipeList.css";

// PUBLIC_INTERFACE
/**
 * RecipeList component displays a list of recipes.
 */
function RecipeList({ recipes, onSelectRecipe }) {
  if (recipes.length === 0) {
    return <div className="recipe-list-empty">No recipes found.</div>;
  }
  return (
    <ul className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeListItem key={recipe.id} recipe={recipe} onClick={() => onSelectRecipe(recipe)} />
      ))}
    </ul>
  );
}

export default RecipeList;
