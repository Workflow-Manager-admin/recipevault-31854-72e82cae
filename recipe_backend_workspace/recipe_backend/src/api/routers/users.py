from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, Field

# PUBLIC_INTERFACE
router = APIRouter()

# Dummy users storage for example only
USERS = {"admin": {"username": "admin", "password": "secret"}}


class UserRegister(BaseModel):
    username: str = Field(..., description="Unique username")
    password: str = Field(..., description="Password")


class UserLogin(BaseModel):
    username: str = Field(..., description="Registered username")
    password: str = Field(..., description="Password")


class UserOut(BaseModel):
    username: str = Field(..., description="User's username")


# PUBLIC_INTERFACE
@router.post("/register", response_model=UserOut, summary="Register a new user")
async def register(user: UserRegister):
    """
    Register a new user (demo - not persistent).
    """
    if user.username in USERS:
        raise HTTPException(status_code=400, detail="Username already exists")
    USERS[user.username] = {"username": user.username, "password": user.password}
    return {"username": user.username}


# PUBLIC_INTERFACE
@router.post("/login", response_model=UserOut, summary="User login")
async def login(user: UserLogin):
    """
    Authenticate a user (demo, not secure/no JWT).
    """
    db_user = USERS.get(user.username)
    if not db_user or db_user["password"] != user.password:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials"
        )
    return {"username": user.username}
