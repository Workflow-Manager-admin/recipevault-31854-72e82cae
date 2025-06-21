import React, { useState } from "react";
import "./AuthForm.css";

// PUBLIC_INTERFACE
/**
 * AuthForm handles login/signup forms.
 */
function AuthForm({ onAuth, mode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isSignup = mode === "signup";

  return (
    <form
      className="auth-form"
      onSubmit={e => {
        e.preventDefault();
        onAuth({ email, password, mode });
      }}
    >
      <h2>{isSignup ? "Sign Up" : "Log In"}</h2>
      <input
        type="email"
        className="auth-input"
        value={email}
        onChange={e => setEmail(e.target.value)}
        autoComplete="email"
        required
        placeholder="Email"
      />
      <input
        type="password"
        className="auth-input"
        value={password}
        onChange={e => setPassword(e.target.value)}
        autoComplete={isSignup ? "new-password" : "current-password"}
        required
        placeholder="Password"
      />
      <button className="btn btn-large" type="submit">
        {isSignup ? "Sign Up" : "Log In"}
      </button>
    </form>
  );
}

export default AuthForm;
