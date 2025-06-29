import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({
  onLoginClick,
  onSignupClick,
  onLogoutClick,
  loggedInUser,
}) => {
  const navigate = useNavigate(); // Add this line to define navigate
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLogoutVisible, setLogoutVisible] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleLogoutVisibility = () => {
    setLogoutVisible(!isLogoutVisible);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Travel Finder</h1>
      <div className="navbar-buttons">
        <button className="view-btn" onClick={() => navigate("/")}>
          Home
        </button>
        <button
          className="view-btn"
          onClick={() => navigate("/add-destination")}
        >
          Add New
        </button>
        {loggedInUser ? (
          <>
            <div className="user-info">
              <img
                src={
                  loggedInUser.image ||
                  "data:image/jpeg;base64,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"
                }
                alt="User"
                className="user-image"
                onClick={toggleLogoutVisibility}
              />
            </div>
            {isLogoutVisible && (
              <button className="view-btn" onClick={onLogoutClick}>
                Logout
              </button>
            )}
          </>
        ) : (
          <>
            <button className="view-btn" onClick={onLoginClick}>
              Login
            </button>
            <button className="view-btn" onClick={onSignupClick}>
              Sign Up
            </button>
          </>
        )}
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      {isMenuOpen && (
        <div className="side-menu">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/add-destination")}>Add New</button>
          {loggedInUser ? (
            <button onClick={onLogoutClick}>Logout</button>
          ) : (
            <>
              <button onClick={onLoginClick}>Login</button>
              <button onClick={onSignupClick}>Sign Up</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
