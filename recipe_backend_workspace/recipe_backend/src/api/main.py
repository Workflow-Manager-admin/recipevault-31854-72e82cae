from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import recipes, users

# PUBLIC_INTERFACE
app = FastAPI(
    title="RecipeVault API",
    description="API for browsing, searching, creating, editing recipes, and user authentication.",
    version="0.1.0",
    openapi_tags=[
        {"name": "recipes", "description": "Browse, search, view, create and edit recipes."},
        {"name": "users", "description": "User registration and authentication."}
    ],
)

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # set to app URL in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["Utility"])
def health_check():
    """
    Simple healthcheck endpoint.
    """
    return {"message": "Healthy"}


# Register core routers
app.include_router(recipes.router, prefix="/recipes", tags=["recipes"])
app.include_router(users.router, prefix="/users", tags=["users"])
