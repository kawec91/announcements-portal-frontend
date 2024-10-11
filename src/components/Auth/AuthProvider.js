import React, { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// Create the AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("token") || null
  );
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Function to handle login
  const login = async (token) => {
    localStorage.setItem("token", token);
    setAuthToken(token);
    const decodedUser = parseJwt(token);
    setUser(decodedUser);
  };

  // Function to handle logout
  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setAuthToken(null);
    setUser(null);
    navigate("/login");
  }, [navigate]);

  // Function to parse JWT token to get user info
  const parseJwt = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      return null;
    }
  };

  // Check if token is valid on app load
  useEffect(() => {
    if (authToken) {
      const decodedUser = parseJwt(authToken);
      if (decodedUser) {
        setUser(decodedUser);
      } else {
        logout(); // Token is invalid
      }
    }
  }, [authToken, logout]);

  return (
    <AuthContext.Provider value={{ authToken, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
