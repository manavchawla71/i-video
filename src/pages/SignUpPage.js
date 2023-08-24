import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
const SignUpPage = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const signUpDetailsHandler = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (!user.firstName || !user.lastName || !user.email || !user.password) {
      toast.error("Please fill in all fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Registration successful");
    // Optionally, you can redirect the user to the login page here
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="auth-page">
      <form className="login-form" onSubmit={signUpDetailsHandler}>
        <h2 className="margin-top-bottom-zero center-text green">SIGN UP</h2>
        <div className="form-inputs">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="form-input-individual"
            required
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="form-input-individual"
            required
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="form-input-individual"
            required
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-input-individual"
            required
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="login-form-btn">
          SIGN UP
        </button>
        <p className="register-text">
          Already a user?{" "}
          <Link to="/login" className="link link-color register">
            LOGIN
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
