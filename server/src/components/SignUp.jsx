import React, { useState } from "react";
import "./SignUp.css";

function Signup({ onSignup, onClose, onSwitchToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(""); // Added image state

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Checking if email exists...");
      const existingUserResponse = await fetch(
        `http://localhost:3000/users?email=${email}`
      );
      if (!existingUserResponse.ok) {
        throw new Error(`HTTP error! Status: ${existingUserResponse.status}`);
      }
      const existingUsers = await existingUserResponse.json();
      console.log("Existing users:", existingUsers);
      if (existingUsers.length > 0) {
        alert("Email already exists. Please use a different email.");
        return;
      }

      console.log("Submitting new user data...");
      const response = await fetch("http://localhost:3000/users", {
        // Corrected endpoint to match the existingUserResponse base URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, image }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const user = await response.json();
      console.log("Signup successful, user:", user);
      onSignup(user);
      alert("Signup successful!");
      onClose();
    } catch (error) {
      console.error("Signup error:", error.message);
      alert(`Signup failed: ${error.message}`);
    }
  };

  return (
    <div className="signup-container">
      <button type="button" className="close-button" onClick={onClose}>
        &times;
      </button>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL" // Added image input field
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account?{" "}
          <a href="#" onClick={onSwitchToLogin}>
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
