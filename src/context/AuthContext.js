import React, { createContext, useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router"; // Import useLocation
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setisUserLoggedIn] = useState(false);
  const navigate = useNavigate();
  // const location = useLocation(); // Add this line to useLocation
  const userLoginService = () => {
    toast.success("logged in successfully");
    navigate("/video");
  };
  const value = { userLoginService, isUserLoggedIn, setisUserLoggedIn };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
