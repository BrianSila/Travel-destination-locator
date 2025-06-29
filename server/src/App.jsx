import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DestinationGrid from "./components/DestinationGrid";
import DestinationForm from "./components/DestinationForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/SignUp";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);

  useEffect(() => {
    // Check if user is stored in session storage on component mount
    const saved = sessionStorage.getItem("currentUser");
    if (saved) {
      setLoggedInUser(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((r) => r.json()) // Add parentheses to correctly invoke the json method
      .then((data) => setLoggedInUser(data));
  }, []);

  const handleLogin = (user) => {
    // Save user data to session storage and update state
    sessionStorage.setItem("currentUser", JSON.stringify(user));
    setLoggedInUser(user);
    setLoginOpen(false);
  };

  const handleSignup = (user) => {
    // After successful signup, automatically log in
    sessionStorage.setItem("currentUser", JSON.stringify(user));
    setLoggedInUser(user);
    setSignupOpen(false);
  };

  const handleLogout = () => {
    // Clear user data from session storage and state
    sessionStorage.removeItem("currentUser");
    setLoggedInUser(null);
  };

  return (
    <Router>
      <Header />
      <Navbar
        onLoginClick={() => setLoginOpen(true)}
        onSignupClick={() => setSignupOpen(true)}
        onLogoutClick={handleLogout}
        loggedInUser={loggedInUser}
      />
      {isLoginOpen && (
        <Login
          onLogin={handleLogin}
          onClose={() => setLoginOpen(false)}
          onSwitchToSignup={() => {
            setLoginOpen(false);
            setSignupOpen(true);
          }}
        />
      )}
      {isSignupOpen && (
        <Signup
          onSignup={handleSignup}
          onClose={() => setSignupOpen(false)}
          onSwitchToLogin={() => {
            setSignupOpen(false);
            setLoginOpen(true);
          }}
        />
      )}
      <Routes>
        <Route path="/" element={<DestinationGrid />} />
        <Route path="/add-destination" element={<DestinationForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
