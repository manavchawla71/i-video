import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userLoginService } = useAuth();
  const { isUserLoggedIn, setisUserLoggedIn } = useAuth();

  const guestLoginHandler = () => {
    setEmail("chawlamanav@gmail.com");
    setPassword("amn@M12345");
  };

  const handleLogout = () => {
    setisUserLoggedIn(false);
    toast.success("logged out");
    // Optionally, you can clear the user data, e.g., email and password, from state here
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get user data from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if there is a user with matching email and password
    const userMatch = users.find(
      (user) => user.email === email && user.password === password
    );

    if (
      userMatch ||
      (email === "chawlamanav@gmail.com" && password === "amn@M12345")
    ) {
      setisUserLoggedIn(true);
      userLoginService();
    } else {
      // Handle incorrect credentials here
      alert("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div className="login-form">
      {isUserLoggedIn ? (
        <>
          <h2 className="margin-top-bottom-zero center-text green">Goodbye</h2>
          <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <>
          <h2 className="margin-top-bottom-zero center-text green">LOG IN</h2>
          <div className="form-inputs">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="form-input-individual"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-input-individual"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="login-form-btn"
            onClick={handleSubmit}
          >
            LOGIN
          </button>
          <p className="register-text">
            Don't have an account?{" "}
            <Link to="/sign-up" className="link link-color register">
              REGISTER
            </Link>
          </p>
          <button className="login-guest" onClick={guestLoginHandler}>
            Test User Login
          </button>
        </>
      )}
    </div>
  );
};

export default LoginPage;
