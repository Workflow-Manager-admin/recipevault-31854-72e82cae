import React from "react";
import "./RecipeDetailModal.css";

// PUBLIC_INTERFACE
/**
 * RecipeDetailModal shows a modal with full recipe details.
 */
function RecipeDetailModal({ recipe, onClose }) {
  if (!recipe) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>{recipe.title}</h2>
        <div className="modal-section">
          <strong>Description:</strong> {recipe.description}
        </div>
        <div className="modal-section">
          <strong>Ingredients:</strong>
          <ul>
            {recipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
          </ul>
        </div>
        <div className="modal-section">
          <strong>Instructions:</strong>
          <ol>
            {recipe.instructions.map((step, idx) => <li key={idx}>{step}</li>)}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailModal;
