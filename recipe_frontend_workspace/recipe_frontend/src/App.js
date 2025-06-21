import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import AuthForm from "./components/AuthForm";
import RecipeForm from "./components/RecipeForm";

// ** Dummy Data for Demo/Scaffold **
const DUMMY_CATEGORIES = ["Breakfast", "Lunch", "Dinner", "Dessert"];
const DUMMY_RECIPES = [
  {
    id: "1",
    title: "Avocado Toast",
    shortDescription: "Crunchy toast with creamy avocado.",
    description: "Healthy start for your morning.",
    ingredients: ["2 slices bread", "1 avocado", "salt", "pepper"],
    instructions: ["Toast bread", "Mash avocado", "Spread on toast", "Sprinkle salt and pepper"],
    category: "Breakfast"
  },
  {
    id: "2",
    title: "Choco Lava Cake",
    shortDescription: "Decadent molten chocolate cake.",
    description: "Rich dessert with gooey chocolate center.",
    ingredients: ["Chocolate", "Flour", "Eggs", "Sugar", "Butter"],
    instructions: ["Prepare batter", "Bake in oven", "Serve warm"],
    category: "Dessert"
  }
];

function App() {
  const [route, setRoute] = useState("home");
  const [user, setUser] = useState(null);

  // Demo handlers
  const handleLogin = ({ email }) => {
    setUser({ username: email.split("@")[0], email });
    setRoute("home");
  };

  return (
    <div className="app" style={{background: "var(--background)"}}>
      <Header onProfileClick={() => setRoute("profile")} />
      <main className="main-content">
        {user ? (
          <>
            {route === "home" && <HomePage recipes={DUMMY_RECIPES} categories={DUMMY_CATEGORIES} />}
            {route === "profile" && <UserProfile user={user} />}
            {route === "create" && <RecipeForm onSubmit={() => setRoute("home")} />}
          </>
        ) : (
          <AuthForm onAuth={handleLogin} mode="login" />
        )}
      </main>
    </div>
  );
}

export default App;