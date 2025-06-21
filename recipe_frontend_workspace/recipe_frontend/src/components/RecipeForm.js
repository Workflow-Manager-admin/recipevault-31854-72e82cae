import React, { useState } from "react";
import "./RecipeForm.css";

// PUBLIC_INTERFACE
/**
 * RecipeForm handles creation and editing of recipes.
 */
function RecipeForm({ onSubmit, initialRecipe }) {
  const [title, setTitle] = useState(initialRecipe?.title || "");
  const [description, setDescription] = useState(initialRecipe?.description || "");
  const [ingredients, setIngredients] = useState(initialRecipe?.ingredients?.join("\n") || "");
  const [instructions, setInstructions] = useState(initialRecipe?.instructions?.join("\n") || "");

  return (
    <form
      className="recipe-form"
      onSubmit={e => {
        e.preventDefault();
        onSubmit({
          title,
          description,
          ingredients: ingredients.split("\n").map(l=>l.trim()).filter(Boolean),
          instructions: instructions.split("\n").map(l=>l.trim()).filter(Boolean),
        });
      }}
    >
      <h2>{initialRecipe ? "Edit Recipe" : "Create Recipe"}</h2>
      <input
        type="text"
        className="recipe-input"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        placeholder="Recipe Title"
      />
      <textarea
        className="recipe-input"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
        rows={2}
        placeholder="Short Description"
      />
      <textarea
        className="recipe-input"
        value={ingredients}
        onChange={e => setIngredients(e.target.value)}
        required
        rows={4}
        placeholder="Ingredients (one per line)"
      />
      <textarea
        className="recipe-input"
        value={instructions}
        onChange={e => setInstructions(e.target.value)}
        required
        rows={6}
        placeholder="Instructions (one step per line)"
      />
      <button className="btn btn-large" type="submit">
        {initialRecipe ? "Update Recipe" : "Create Recipe"}
      </button>
    </form>
  );
}

export default RecipeForm;
