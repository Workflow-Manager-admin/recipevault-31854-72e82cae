import React from "react";
import "./UserProfile.css";

// PUBLIC_INTERFACE
/**
 * UserProfile page for profile viewing/editing.
 */
function UserProfile({ user }) {
  if (!user) {
    return <div className="profile-container">Loading...</div>;
  }
  return (
    <div className="profile-container">
      <h2 className="profile-header">User Profile</h2>
      <div className="profile-info">
        <div><strong>Username:</strong> {user.username}</div>
        <div><strong>Email:</strong> {user.email}</div>
      </div>
      <button className="btn">Edit Profile</button>
    </div>
  );
}

export default UserProfile;
