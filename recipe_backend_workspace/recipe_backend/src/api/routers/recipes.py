from fastapi import APIRouter, HTTPException, Query
from typing import List
from pydantic import BaseModel, Field

# Dummy in-memory storage for demo
RECIPES = [
    {
        "id": 1,
        "title": "Classic Pancakes",
        "ingredients": ["flour", "milk", "eggs", "sugar", "salt"],
        "instructions": "Mix and cook.",
        "author": "admin",
    }
]


class Recipe(BaseModel):
    id: int = Field(..., description="Unique recipe identifier")
    title: str = Field(..., description="Title of the recipe")
    ingredients: List[str] = Field(..., description="List of ingredients")
    instructions: str = Field(..., description="Preparation steps")
    author: str = Field(..., description="User who created recipe")


class RecipeCreate(BaseModel):
    title: str = Field(..., description="Title of the recipe")
    ingredients: List[str] = Field(..., description="List of ingredients")
    instructions: str = Field(..., description="Preparation steps")


# PUBLIC_INTERFACE
router = APIRouter()


# PUBLIC_INTERFACE
@router.get("/", response_model=List[Recipe], summary="Browse all recipes")
async def list_recipes():
    """
    Retrieve all recipes, optionally supports browsing pagination.
    """
    return RECIPES


# PUBLIC_INTERFACE
@router.get("/search/", response_model=List[Recipe], summary="Search for recipes")
async def search_recipes(
    q: str = Query(..., description="Search query for recipe titles or ingredients.")
):
    """
    Search recipes by query in title or ingredients.
    """
    q_lower = q.lower()
    return [
        recipe
        for recipe in RECIPES
        if q_lower in recipe["title"].lower()
        or any(q_lower in ingr.lower() for ingr in recipe["ingredients"])
    ]


# PUBLIC_INTERFACE
@router.get("/{recipe_id}", response_model=Recipe, summary="View recipe details")
async def get_recipe(recipe_id: int):
    """
    Retrieve details of a specific recipe by its ID.
    """
    for recipe in RECIPES:
        if recipe["id"] == recipe_id:
            return recipe
    raise HTTPException(status_code=404, detail="Recipe not found")


# PUBLIC_INTERFACE
@router.post("/", response_model=Recipe, summary="Create a new recipe")
async def create_recipe(recipe: RecipeCreate):
    """
    Add a new recipe (dummy insert, no DB yet).
    """
    new_id = max(r["id"] for r in RECIPES) + 1 if RECIPES else 1
    rec = recipe.dict()
    rec.update({"id": new_id, "author": "demo_user"})
    RECIPES.append(rec)
    return rec


# PUBLIC_INTERFACE
@router.put("/{recipe_id}", response_model=Recipe, summary="Edit an existing recipe")
async def edit_recipe(recipe_id: int, recipe: RecipeCreate):
    """
    Edit an existing recipe by ID (dummy operation).
    """
    for r in RECIPES:
        if r["id"] == recipe_id:
            r.update(recipe.dict())
            return r
    raise HTTPException(status_code=404, detail="Recipe not found")
